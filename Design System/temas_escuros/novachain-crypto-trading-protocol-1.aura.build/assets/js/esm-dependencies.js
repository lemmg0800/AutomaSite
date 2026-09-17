// DEBUG flag - set to false for production to silence logs
      const DEBUG = false;
      window.__PREVIEW_DEBUG = DEBUG;
      window.__externalESMModules =
        window.__externalESMModules || Object.create(null);
      const getExternalModuleDefault = (loadedModule) => {
        if (!loadedModule) {
          return loadedModule;
        }

        if (
          (typeof loadedModule === "object" ||
            typeof loadedModule === "function") &&
          Object.prototype.hasOwnProperty.call(loadedModule, "default")
        ) {
          return loadedModule.default;
        }

        if (
          loadedModule?.gsap &&
          typeof loadedModule.gsap.context === "function"
        ) {
          return loadedModule.gsap;
        }

        return loadedModule;
      };
      const normalizeExternalModule = (loadedModule) => ({
        ...(loadedModule || {}),
        default: getExternalModuleDefault(loadedModule),
        __esModule: true,
      });
      const createGsapModule = () =>
        normalizeExternalModule({
          ...(window.gsap || {}),
          default: window.gsap,
          gsap: window.gsap,
          ScrollTrigger: window.ScrollTrigger,
        });
      const createGsapScrollTriggerModule = () =>
        normalizeExternalModule({
          ...(window.ScrollTrigger || {}),
          default: window.ScrollTrigger,
          ScrollTrigger: window.ScrollTrigger,
          gsap: window.gsap,
        });
      const PREVIEW_SOURCE_PATH_ATTRIBUTE = "data-aura-source-path";
      const PREVIEW_SOURCE_LINE_ATTRIBUTE = "data-aura-source-line";
      const PREVIEW_SOURCE_COLUMN_ATTRIBUTE = "data-aura-source-column";
      const PREVIEW_COMPONENT_NAME_ATTRIBUTE = "data-aura-component-name";
      const PREVIEW_SOURCE_TAG_ATTRIBUTE = "data-aura-source-tag";
      const PREVIEW_GENERIC_COMPONENT_TAGS = new Set([
        "Component",
        "Tag",
        "Element",
      ]);
      const normalizePreviewSourcePath = (value) => {
        if (typeof value !== "string") {
          return null;
        }

        const normalized = value.replace(/^\/+/, "").trim();
        return normalized || null;
      };
      const normalizePreviewComponentName = (value) => {
        if (typeof value !== "string") {
          return null;
        }

        let normalized = value.trim();
        if (!normalized) {
          return null;
        }

        const wrappedNameMatch = normalized.match(
          /^(?:ForwardRef|Memo)\((.+)\)$/,
        );
        if (wrappedNameMatch?.[1]) {
          normalized = wrappedNameMatch[1].trim();
        }

        if (
          normalized.endsWith("WithRef") &&
          normalized.length > "WithRef".length
        ) {
          normalized = normalized.slice(0, -"WithRef".length).trim();
        }

        if (!normalized || /^anonymous$/i.test(normalized)) {
          return null;
        }

        return normalized;
      };
      const getPreviewCurrentOwnerType = (ReactModule) =>
        ReactModule?.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          ?.ReactCurrentOwner?.current?.type || null;
      const getPreviewOwnerComponentName = (ReactModule) => {
        const ownerType = getPreviewCurrentOwnerType(ReactModule);

        if (!ownerType || typeof ownerType === "string") {
          return null;
        }

        if (typeof ownerType === "function") {
          return normalizePreviewComponentName(
            ownerType.displayName || ownerType.name || "",
          );
        }

        if (typeof ownerType === "object") {
          return normalizePreviewComponentName(
            ownerType.displayName ||
              ownerType.name ||
              ownerType.render?.displayName ||
              ownerType.render?.name ||
              ownerType.type?.displayName ||
              ownerType.type?.name ||
              "",
          );
        }

        return null;
      };
      const getPreviewModuleSource = (filePath) => {
        const modules = window.__auraPreviewModules;

        if (!modules || typeof modules !== "object") {
          return "";
        }

        return typeof modules[filePath] === "string" ? modules[filePath] : "";
      };
      const readPreviewJsxSourceTag = (filePath, lineNumber, columnNumber) => {
        if (!filePath || !Number.isFinite(lineNumber) || lineNumber <= 0) {
          return null;
        }

        const sourceText = getPreviewModuleSource(filePath);
        if (!sourceText) {
          return null;
        }

        const lines = sourceText.split(/\r?\n/);
        const startLineIndex = Math.max(0, lineNumber - 1);
        const snippet = lines
          .slice(startLineIndex, Math.min(lines.length, startLineIndex + 4))
          .join("\n");

        if (!snippet) {
          return null;
        }

        const baseOffset =
          Number.isFinite(columnNumber) && columnNumber > 0
            ? columnNumber - 1
            : 0;
        const searchStart = Math.max(0, baseOffset - 32);
        const searchEnd = Math.min(snippet.length, baseOffset + 160);
        const searchText = snippet.slice(searchStart, searchEnd);
        const jsxTagPattern =
          /<\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)/g;
        let bestMatch = null;
        let match = null;

        while ((match = jsxTagPattern.exec(searchText)) !== null) {
          const distance = Math.abs(match.index + searchStart - baseOffset);

          if (!bestMatch || distance < bestMatch.distance) {
            bestMatch = {
              tagName: match[1],
              distance,
            };
          }
        }

        return bestMatch?.tagName || null;
      };
      const isIntrinsicPreviewTagMatch = (jsxTag, type) => {
        if (typeof type !== "string" || typeof jsxTag !== "string") {
          return false;
        }

        const normalizedTag = jsxTag.trim();
        if (!normalizedTag || !/^[a-z]/.test(normalizedTag)) {
          return false;
        }

        return normalizedTag.toLowerCase() === String(type).toLowerCase();
      };
      const resolvePreviewComponentLabel = ({ type, source, ReactModule }) => {
        const normalizedFilePath = normalizePreviewSourcePath(
          source?.fileName || source?.filename || source?.file,
        );
        const lineNumber =
          typeof source?.lineNumber === "number" &&
          Number.isFinite(source.lineNumber)
            ? source.lineNumber
            : null;
        const columnNumber =
          typeof source?.columnNumber === "number" &&
          Number.isFinite(source.columnNumber)
            ? source.columnNumber
            : null;
        const jsxSourceTag =
          normalizedFilePath && lineNumber
            ? readPreviewJsxSourceTag(
                normalizedFilePath,
                lineNumber,
                columnNumber,
              )
            : null;
        const ownerComponentName = getPreviewOwnerComponentName(ReactModule);
        let componentLabel = null;

        if (jsxSourceTag && !isIntrinsicPreviewTagMatch(jsxSourceTag, type)) {
          componentLabel = PREVIEW_GENERIC_COMPONENT_TAGS.has(jsxSourceTag)
            ? ownerComponentName || jsxSourceTag
            : jsxSourceTag;
        }

        if (
          !componentLabel &&
          !jsxSourceTag &&
          ownerComponentName &&
          typeof type === "string" &&
          ownerComponentName.toLowerCase() !== String(type).toLowerCase()
        ) {
          componentLabel = ownerComponentName;
        }

        return {
          componentLabel,
          jsxSourceTag,
          normalizedFilePath,
          lineNumber,
          columnNumber,
        };
      };
      const createReactSourceAttributeBridge = (ReactModule) => {
        if (
          !ReactModule ||
          typeof ReactModule.createElement !== "function"
        ) {
          return ReactModule;
        }

        const originalCreateElement = ReactModule.createElement.bind(
          ReactModule,
        );
        const bridgedReactModule = {
          ...ReactModule,
        };

        bridgedReactModule.createElement = function auraPreviewCreateElement(
          type,
          props,
          ...children
        ) {
          if (!props || typeof props !== "object") {
            return originalCreateElement(type, props, ...children);
          }

          const source = props.__source;
          const nextProps = { ...props };
          delete nextProps.__source;
          delete nextProps.__self;

          if (typeof type === "string") {
            const previewLabelMeta = resolvePreviewComponentLabel({
              type,
              source,
              ReactModule,
            });
            const normalizedFilePath = previewLabelMeta.normalizedFilePath;

            if (normalizedFilePath) {
              nextProps[PREVIEW_SOURCE_PATH_ATTRIBUTE] = normalizedFilePath;
            }

            if (
              source &&
              typeof source.lineNumber === "number" &&
              Number.isFinite(source.lineNumber)
            ) {
              nextProps[PREVIEW_SOURCE_LINE_ATTRIBUTE] = String(
                source.lineNumber,
              );
            }

            if (
              source &&
              typeof source.columnNumber === "number" &&
              Number.isFinite(source.columnNumber)
            ) {
              nextProps[PREVIEW_SOURCE_COLUMN_ATTRIBUTE] = String(
                source.columnNumber,
              );
            }

            if (previewLabelMeta.componentLabel) {
              nextProps[PREVIEW_COMPONENT_NAME_ATTRIBUTE] =
                previewLabelMeta.componentLabel;
            }

            if (previewLabelMeta.jsxSourceTag) {
              nextProps[PREVIEW_SOURCE_TAG_ATTRIBUTE] =
                previewLabelMeta.jsxSourceTag;
            }
          }

          return originalCreateElement(type, nextProps, ...children);
        };

        bridgedReactModule.default = bridgedReactModule;
        bridgedReactModule.__auraSourceBridgeInstalled = true;
        return bridgedReactModule;
      };
      function createMissingExternalPlaceholder(specifier) {
        const ReactModule = window.__reactESM || window.React;
        let placeholderProxy = null;

        const placeholderTarget = function AuraMissingExternalDependency(
          firstArg,
        ) {
          if (
            ReactModule &&
            firstArg &&
            typeof firstArg === "object" &&
            !Array.isArray(firstArg)
          ) {
            return ReactModule.createElement(ReactModule.Fragment, null);
          }

          return placeholderProxy;
        };

        placeholderProxy = new Proxy(placeholderTarget, {
          apply(target, thisArg, args) {
            const firstArg = Array.isArray(args) ? args[0] : undefined;

            if (
              ReactModule &&
              firstArg &&
              typeof firstArg === "object" &&
              !Array.isArray(firstArg)
            ) {
              return ReactModule.createElement(ReactModule.Fragment, null);
            }

            return placeholderProxy;
          },
          construct() {
            return placeholderProxy;
          },
          get(target, prop) {
            if (prop === "__esModule") {
              return true;
            }

            if (prop === "default") {
              return placeholderProxy;
            }

            if (prop === "then") {
              return undefined;
            }

            if (prop === Symbol.toPrimitive) {
              return () => "";
            }

            if (prop === "toString") {
              return () => `[Missing external module: ${specifier}]`;
            }

            return placeholderProxy;
          },
        });

        return placeholderProxy;
      }
      function createMissingExternalModuleShim(specifier, error) {
        const fallbackValue = createMissingExternalPlaceholder(specifier);
        const shimTarget = {
          __esModule: true,
          __auraPreserveModuleProxy: true,
          __auraMissingExternalSpecifier: specifier,
          __auraMissingExternalMessage:
            error instanceof Error ? error.message : String(error || ""),
          default: fallbackValue,
        };

        return new Proxy(shimTarget, {
          get(target, prop) {
            if (prop in target) {
              return target[prop];
            }

            return fallbackValue;
          },
        });
      }
      const createIconifyReactShim = () => {
        const ReactModule = window.__reactESM || window.React;

        const renderIcon = (
          { inline, hFlip, vFlip, flip, children, ...restProps },
          ref,
        ) => {
          const nextProps = {
            ...restProps,
            ref,
          };

          if (inline) {
            nextProps.inline = true;
          }

          if (hFlip) {
            nextProps["h-flip"] = true;
          }

          if (vFlip) {
            nextProps["v-flip"] = true;
          }

          if (flip) {
            nextProps.flip = flip;
          }

          return ReactModule.createElement("iconify-icon", nextProps, children);
        };

        const Icon = ReactModule.forwardRef((props, ref) =>
          renderIcon(props || {}, ref),
        );
        const InlineIcon = ReactModule.forwardRef((props, ref) =>
          renderIcon({ ...(props || {}), inline: true }, ref),
        );
        const loadIcons = async () => [];
        const addCollection = () => {};
        const addIcon = () => {};

        return normalizeExternalModule({
          Icon,
          InlineIcon,
          loadIcons,
          addCollection,
          addIcon,
          default: Icon,
        });
      };

      if (DEBUG) console.log("🚀 Loading ESM dependencies...");

      try {
        // Load all dependencies in parallel
        const [
          reactModule,
          reactDomModule,
          reactDomClientModule,
          lucideModule,
          unicornModule,
        ] = await Promise.all([
          import("react"),
          import("react-dom"),
          import("react-dom/client"),
          import("lucide-react"),
          import("unicornstudio-react"),
        ]);

        // Expose to global scope for require() function
        const bridgedReactModule =
          createReactSourceAttributeBridge(reactModule);
        window.__reactESM = bridgedReactModule;
        window.__reactDomESM = reactDomModule;
        window.__reactDomClientESM = reactDomClientModule;
        window.__lucideReactESM = lucideModule;
        window.__unicornStudioESM = unicornModule;
        window.__externalESMModules.react =
          normalizeExternalModule(bridgedReactModule);
        window.__externalESMModules["react-dom"] =
          normalizeExternalModule(reactDomModule);
        window.__externalESMModules["react-dom/client"] =
          normalizeExternalModule(reactDomClientModule);
        window.__externalESMModules["lucide-react"] =
          normalizeExternalModule(lucideModule);
        window.__externalESMModules["unicornstudio-react"] =
          normalizeExternalModule(unicornModule);
        window.__iconifyReactESM = createIconifyReactShim();
        window.__externalESMModules["@iconify/react"] =
          window.__iconifyReactESM;
        if (window.gsap) {
          window.__gsapESM = createGsapModule();
          window.__externalESMModules.gsap = window.__gsapESM;
        }
        if (window.ScrollTrigger) {
          window.__gsapScrollTriggerESM = createGsapScrollTriggerModule();
          window.__externalESMModules["gsap/ScrollTrigger"] =
            window.__gsapScrollTriggerESM;
        }

        // Backward compatibility - expose as UMD-style globals
        window.React = bridgedReactModule;
        window.ReactDOM = reactDomModule;
        window.LucideReact = lucideModule;
        window.UnicornScene = unicornModule.default || unicornModule;

        if (DEBUG)
          console.log("✅ ESM modules loaded:", {
            React: !!window.__reactESM,
            ReactDOM: !!window.__reactDomESM,
            ReactDOMClient: !!window.__reactDomClientESM,
            LucideReact: !!window.__lucideReactESM,
            LucideExports: Object.keys(lucideModule).length,
            UnicornStudio: !!window.__unicornStudioESM,
          });

        // Signal ready
        window.__esmDepsReady = true;
        window.dispatchEvent(new Event("esm-deps-ready"));
      } catch (error) {
        console.error("❌ Failed to load ESM dependencies:", error);
        window.dispatchEvent(new Event("esm-deps-error"));
      }
