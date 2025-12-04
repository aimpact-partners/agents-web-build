System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@beyond-js/kernel@0.1.14/routing", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "@beyond-js/reactive@2.1.1/model", "react@18.3.1", "@radix-ui/react-select@2.2.6", "@radix-ui/react-icons@1.3.2", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks", "clsx@2.1.1", "@aimpact/platform@0.1.6/shared/icons", "pragmate-ui@1.0.8/drawer", "@aimpact/platform@0.1.6/components/editor", "pragmate-ui@1.0.8/components", "react-json-view-lite@2.5.0", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/icons", "framer-motion@11.18.2", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, LanguagesPanel, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    LanguagesPanel: void 0
  });
  return {
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_3 = _beyondJsReact18Widgets116Page;
    }, function (_beyondJsKernel0114Routing) {
      dependency_4 = _beyondJsKernel0114Routing;
    }, function (_aimpactPlatform016Models) {
      dependency_5 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_6 = _aimpactPlatform016StoresBase;
    }, function (_beyondJsReactive211Model) {
      dependency_7 = _beyondJsReactive211Model;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_radixUiReactSelect) {
      dependency_9 = _radixUiReactSelect;
    }, function (_radixUiReactIcons) {
      dependency_10 = _radixUiReactIcons;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_11 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_12 = _beyondJsReact18Widgets116Hooks;
    }, function (_clsx2) {
      dependency_13 = _clsx2;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_14 = _aimpactPlatform016SharedIcons;
    }, function (_pragmateUi108Drawer) {
      dependency_15 = _pragmateUi108Drawer;
    }, function (_aimpactPlatform016ComponentsEditor) {
      dependency_16 = _aimpactPlatform016ComponentsEditor;
    }, function (_pragmateUi108Components) {
      dependency_17 = _pragmateUi108Components;
    }, function (_reactJsonViewLite2) {
      dependency_18 = _reactJsonViewLite2;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_19 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Icons) {
      dependency_20 = _pragmateUi108Icons;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi108Form) {
      dependency_22 = _pragmateUi108Form;
    }, function (_pragmateUi108Toast) {
      dependency_23 = _pragmateUi108Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/prompts-view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@aimpact/platform/models', dependency_5], ['@aimpact/platform/stores/base', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['react', dependency_8], ['@radix-ui/react-select', dependency_9], ['@radix-ui/react-icons', dependency_10], ['@aimpact/platform/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['clsx', dependency_13], ['@aimpact/platform/shared/icons', dependency_14], ['pragmate-ui/drawer', dependency_15], ['@aimpact/platform/components/editor', dependency_16], ['pragmate-ui/components', dependency_17], ['react-json-view-lite', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['pragmate-ui/icons', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/toast', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "prompts-view",
        "vspecifier": "@aimpact/platform@0.1.6/prompts-view.widget",
        "is": "page",
        "route": "/prompts/management",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/prompts-view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 487328607,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri);
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 464769176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _base = require("@aimpact/platform/stores/base");
          var _routing = require("@beyond-js/kernel/routing");
          var _beyond_context = require("beyond_context");
          var _promptExecutorStore = require("./prompt-executor-store");
          class StoreManager extends _base.BaseStoreManager {
            #id;
            #promptExecutorStore;
            #error;
            get error() {
              return this.#error;
            }
            get id() {
              return this.#id;
            }
            get isNew() {
              return !this.model?.id; // @todo: check if this is needed
            }
            #projectId;
            get projectId() {
              return this.#projectId;
            }
            #prompt;
            get prompt() {
              return this.#prompt;
            }
            #dependencies;
            get dependencies() {
              return this.#dependencies;
            }
            #currentLanguage;
            get currentLanguage() {
              return this.#currentLanguage;
            }
            #language;
            get language() {
              return this.#language;
            }
            get defaultLanguage() {
              return this.#prompt.language?.default;
            }
            #prompts;
            get prompts() {
              return this.#prompts;
            }
            #llms;
            get llms() {
              return this.#llms;
            }
            #languageTemplates = new Map();
            get languageTemplates() {
              return this.#languageTemplates;
            }
            get promptExecutorStore() {
              return this.#promptExecutorStore;
            }
            constructor() {
              super(_beyond_context.module.specifier, {
                properties: ['comparedLanguage', 'execution']
              });
              this.promptResolver = _models.PromptResolver;
              this.#promptExecutorStore = new _promptExecutorStore.PromptExecutorStore(this);
              this.#llms = new _models.LLMs();
              globalThis.s = this;
            }
            async load(uri) {
              try {
                const projectId = uri.qs.get('projectId');
                const id = uri.qs.get('promptId');
                const lang = uri.qs.get('lang');
                const execution = uri.qs.get('execution') === 'true';
                const errors = [];
                !projectId && errors.push('projectId');
                if (errors.length) {
                  console.error('Parameters not found: ', errors.join(', '));
                  return;
                }
                this.#id = id;
                this.#projectId = projectId;
                // Set execution property
                this.set({
                  execution
                });
                // Cargar prompts y LLMs en paralelo
                const [prompts] = await Promise.all([_models.AppWrapper.getPrompts({
                  projectId
                }), this.#llms.load()]);
                this.#prompts = prompts;
                this.#prompt = id ? prompts.map.get(id) : new _models.Prompt({
                  projectId: projectId
                });
                if (!this.#prompt) {
                  throw new Error('Prompt not found');
                }
                this.model = this.#prompt;
                this.#currentLanguage = lang;
                // Set prompt in executor store
                // this.#promptExecutorStore.setPrompt(this.#prompt);
                // Check for literals in queryString and set their values
                // Get all query parameters and check if any match the literals from the prompt
                if (this.isNew) return;
                const tpl = await this.getLanguageTemplate(this.#prompt.language?.default);
                await tpl.load();
                this.promptExecutorStore.setPrompt(tpl);
                this.#prompt.literals.pure.forEach(item => {
                  const literalValue = uri.qs.get(item);
                  if (literalValue !== null && literalValue !== undefined) {
                    this.#promptExecutorStore.setLiteralValue(item, literalValue);
                  }
                });
              } catch (e) {
                console.error(e);
                this.#error = 'Error 500';
              } finally {
                super.ready = true;
              }
            }
            async loadLanguageTemplate(language) {
              const instance = this.getLanguageTemplate(language);
              await instance.load();
              return instance;
            }
            getLanguageTemplate(language) {
              if (!language) {
                throw new Error('Invalid parameter language');
              }
              if (!this.languageTemplates.has(language)) {
                const instance = new _models.PromptLanguageTemplate({
                  identifier: this.prompt.identifier,
                  language: {
                    default: language,
                    languages: [language]
                  }
                });
                this.languageTemplates.set(language, instance);
              }
              return this.languageTemplates.get(language);
            }
            clear() {
              this.#id = '';
              this.#projectId = '';
              this.#prompt = null;
              this.languageTemplates.clear();
              this.#currentLanguage = '';
              this.#language = '';
              this.set({
                execution: false
              });
              super.ready = false;
              this.trigger('change');
            }
            async savePrompt() {
              try {
                await this.#prompt.publish();
                _routing.routing.replaceState({}, '', `/prompts/management?projectId=${this.#projectId}&promptId=${this.#prompt.id}`);
                this.trigger('change');
                console.log(4);
              } catch (e) {
                console.error(e);
              }
            }
            async saveLanguage(lang) {
              this.#languageTemplates.get(lang).publish();
            }
            setLanguageToLanguageTemplate(language, template) {
              template.set({
                language
              });
              this.languageTemplates.set(language, template);
              this.trigger('change');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./store/prompt-executor-store
      *********************************************/

      ims.set('./store/prompt-executor-store', {
        hash: 1195257277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptExecutorStore = void 0;
          var _models = require("@aimpact/platform/models");
          var _model = require("@beyond-js/reactive/model");
          class PromptExecutorStore extends _model.ReactiveModel {
            #prompt;
            #parent;
            constructor(parent) {
              super({
                properties: ['value', 'expanded', 'parsed', 'literals', 'dependencies', 'values', 'fetching', 'result']
              });
              this.#parent = parent;
            }
            setPrompt(prompt) {
              // Ejecutar análisis del prompt usando el promptResolver del store padre
              const analyzed = this.#parent.promptResolver.analyze(prompt.value, this.#parent.prompts.items);
              this.#prompt = prompt;
              // Crear objeto de valores iniciales para los literales
              const initialValues = {};
              analyzed.literals.forEach(literal => {
                initialValues[literal] = '';
              });
              // Resolver con valores vacíos inicialmente
              const resolved = this.#parent.promptResolver.resolve(prompt, this.#parent.prompts.items, 'AILEARN.', initialValues);
              // Actualizar el store con los datos analizados y resueltos
              this.set({
                value: resolved.value,
                expanded: resolved.expanded,
                parsed: resolved.parsed,
                literals: resolved.literals,
                dependencies: analyzed.dependencies || [],
                values: initialValues
              });
            }
            setLiteralValue(literal, value) {
              const currentValues = {
                ...this.values
              };
              currentValues[literal] = value;
              // Resolver con los valores actualizados
              const resolved = this.#parent.promptResolver.resolve(this.#prompt, this.#parent.prompts.items, 'AILEARN.', currentValues);
              this.set({
                values: currentValues,
                expanded: resolved.expanded,
                parsed: resolved.parsed
              });
            }
            async execute() {
              this.set({
                fetching: true,
                result: ''
              });
              try {
                const result = await _models.Executor.executePrompt({
                  prompt: this.parsed,
                  type: 'instruction',
                  format: 'text',
                  model: 'gpt-4o-mini'
                });
                this.set({
                  fetching: false,
                  result
                });
              } catch (error) {
                this.set({
                  fetching: false,
                  result: `Error: ${error.message}`
                });
              }
            }
          }
          exports.PromptExecutorStore = PromptExecutorStore;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/form-select
      **********************************************/

      ims.set('./views/components/form-select', {
        hash: 2224387663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormSelect = FormSelect;
          var React = require("react");
          var Select = require("@radix-ui/react-select");
          var _reactIcons = require("@radix-ui/react-icons");
          // components/form-select/form-select.tsx

          function FormSelect({
            options,
            onChange,
            value = ''
          }) {
            const [internalValue, setInternalValue] = React.useState(value || 'none');
            const [open, setOpen] = React.useState(false);
            const firstItemRef = React.useRef(null);
            // Sync external value with internal state
            React.useEffect(() => {
              setInternalValue(value || 'none');
            }, [value]);
            /** Radix ➜ estado abierto/cerrado */
            const handleOpenChange = isOpen => {
              setOpen(isOpen);
              if (isOpen) {
                // enfocamos el primer ítem cuando el menú ya está en el DOM
                requestAnimationFrame(() => firstItemRef.current?.focus());
              }
            };
            const onChangeListener = newValue => {
              const actualValue = newValue === 'none' ? '' : newValue;
              onChange?.(actualValue);
              setInternalValue(newValue);
            };
            return React.createElement("div", null, React.createElement(Select.Root, {
              value: internalValue,
              onValueChange: onChangeListener,
              open: open,
              onOpenChange: handleOpenChange
            }, React.createElement(Select.Trigger, {
              className: "form-select__trigger",
              "aria-label": "Select an option"
            }, React.createElement(Select.Value, {
              placeholder: "Select"
            }), React.createElement(Select.Icon, {
              className: "form-select__icon"
            }, React.createElement(_reactIcons.ChevronDownIcon, null))), React.createElement(Select.Portal, null, React.createElement(Select.Content, {
              className: "form-select__content",
              position: "popper"
            }, React.createElement(Select.Viewport, {
              className: "form-select__viewport"
            }, options.map((opt, idx) => React.createElement(Select.Item, {
              key: opt.value,
              value: opt.value,
              className: "form-select__item",
              ref: idx === 0 ? firstItemRef : undefined,
              tabIndex: -1
            }, React.createElement(Select.ItemText, null, React.createElement("div", {
              className: "form-select__item-content"
            }, React.createElement("span", {
              className: "form-select__item-label"
            }, opt.label), opt.description && React.createElement("span", {
              className: "form-select__item-description"
            }, opt.description))), React.createElement(Select.ItemIndicator, {
              className: "form-select__item-indicator"
            }, React.createElement(_reactIcons.CheckIcon, null)))))))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/model-select
      ***********************************************/

      ims.set('./views/components/model-select', {
        hash: 804133615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormSelect = FormSelect;
          var React = require("react");
          var Select = require("@radix-ui/react-select");
          var _reactIcons = require("@radix-ui/react-icons");
          // components/form-select/form-select.tsx

          function FormSelect({
            options,
            onChange
          }) {
            const [value, setValue] = React.useState(options[0]?.value ?? '');
            const [open, setOpen] = React.useState(false);
            const firstItemRef = React.useRef(null);
            /** Radix ➜ estado abierto/cerrado */
            const handleOpenChange = isOpen => {
              setOpen(isOpen);
              if (isOpen) {
                // enfocamos el primer ítem cuando el menú ya está en el DOM
                requestAnimationFrame(() => firstItemRef.current?.focus());
              }
            };
            const onChangeListener = value => {
              onChange?.(value);
              setValue(value);
            };
            return React.createElement("div", null, React.createElement(Select.Root, {
              value: value,
              onValueChange: onChangeListener,
              open: open,
              onOpenChange: handleOpenChange
            }, React.createElement(Select.Trigger, {
              className: "form-select__trigger",
              "aria-label": "Select an option"
            }, React.createElement(Select.Value, null), React.createElement(Select.Icon, {
              className: "form-select__icon"
            }, React.createElement(_reactIcons.ChevronDownIcon, null))), React.createElement(Select.Portal, null, React.createElement(Select.Content, {
              className: "form-select__content",
              position: "popper"
            }, React.createElement(Select.Viewport, {
              className: "form-select__viewport"
            }, options.map((opt, idx) => React.createElement(Select.Item, {
              key: opt.value,
              value: opt.value,
              className: "form-select__item",
              ref: idx === 0 ? firstItemRef : undefined,
              tabIndex: -1
            }, React.createElement(Select.ItemText, null, React.createElement("div", {
              className: "form-select__item-content"
            }, React.createElement("span", {
              className: "form-select__item-label"
            }, opt.label), opt.description && React.createElement("span", {
              className: "form-select__item-description"
            }, opt.description))), React.createElement(Select.ItemIndicator, {
              className: "form-select__item-indicator"
            }, React.createElement(_reactIcons.CheckIcon, null)))))))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3087243109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1631844005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _clsx = require("clsx");
          var _react = require("react");
          var _context = require("./context");
          var _languages = require("./languages");
          var _index = require("./prompt/index");
          /*bundle*/
          function View({
            store
          }) {
            const [minimized, setMinimized] = (0, _react.useState)(false);
            const {
              ready,
              texts,
              globalTexts
            } = store;
            (0, _hooks.useStore)(store);
            const languagesOptions = store.languages;
            const containerClassName = (0, _clsx.default)('prompt-template-form-container', {
              minimized,
              'is-new': store.isNew
            });
            const toggleLeft = () => setMinimized(false);
            const contextValue = {
              store,
              texts,
              languagesOptions
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                ...contextValue,
                minimized,
                setMinimized
              }
            }, _react.default.createElement(_ui.Page.layout, {
              ready: ready
            }, _react.default.createElement(_ui.Page.header, {
              breadcrumb: [['Home', '/'], [globalTexts.modules.prompts, `/prompts/list/${store.projectId}`], [texts.pageTitle, '']],
              title: texts.pageTitle
            }), _react.default.createElement(_ui.Page.body, {
              className: containerClassName
            }, store.error ? _react.default.createElement("div", {
              className: "container__error place-center"
            }, _react.default.createElement("h3", null, store.error)) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.PromptTemplate, {
              toggle: toggleLeft
            }), !store.isNew && _react.default.createElement(_languages.LanguagesPanel, null)))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/languages/execution-panel
      *************************************************/

      ims.set('./views/languages/execution-panel', {
        hash: 2201599393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalExecutionPanel = ModalExecutionPanel;
          var _icons = require("@aimpact/platform/shared/icons");
          var _drawer = require("pragmate-ui/drawer");
          var _react = require("react");
          var _aside = require("./execution-panel/aside");
          var _mainContent = require("./execution-panel/main-content");
          var _result = require("./execution-panel/result");
          function ModalExecutionPanel({
            show,
            onClose,
            prompt
          }) {
            if (!show) return null;
            return _react.default.createElement(_drawer.Drawer, {
              onClose: onClose,
              open: show,
              position: "right",
              className: "dashboard-drawer"
            }, _react.default.createElement("div", {
              className: "execution-panel"
            }, _react.default.createElement(_mainContent.MainContent, {
              prompt: prompt
            }), _react.default.createElement(_aside.ExecutionAside, {
              prompt: prompt
            }), _react.default.createElement(_result.Result, {
              prompt: prompt
            })), _react.default.createElement(_icons.AppIconButton, {
              icon: "close",
              onClick: onClose,
              className: "close-icon-button"
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/aside
      *******************************************************/

      ims.set('./views/languages/execution-panel/aside', {
        hash: 730857877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExecutionAside = ExecutionAside;
          var _react = require("react");
          var _literals = require("./literals");
          var _context = require("../../context");
          function ExecutionAside({
            prompt
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const promptExecutorStore = store.promptExecutorStore;
            return _react.default.createElement("aside", {
              className: "execution-aside"
            }, _react.default.createElement("header", {
              className: "panel-header"
            }, _react.default.createElement("h6", {
              className: "p-0 m-0"
            }, "Literals")), _react.default.createElement("div", {
              className: "settings"
            }, _react.default.createElement(_literals.PromptLiterals, null)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/collapsible
      *************************************************************/

      ims.set('./views/languages/execution-panel/collapsible', {
        hash: 1615881176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collapsible = Collapsible;
          exports.CollapsibleContent = CollapsibleContent;
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
          function Collapsible({
            children,
            className = '',
            defaultOpen = false
          }) {
            const [isOpen, setIsOpen] = (0, _react.useState)(defaultOpen);
            const toggleOpen = () => {
              setIsOpen(!isOpen);
            };
            // Clone children and pass isOpen state and toggle function
            const childrenWithProps = _react.default.Children.map(children, child => {
              if (_react.default.isValidElement(child)) {
                if (child.type === CollapsibleHeader) {
                  return _react.default.cloneElement(child, {
                    onClick: toggleOpen
                  });
                } else if (child.type === CollapsibleContent) {
                  return _react.default.cloneElement(child, {
                    isOpen
                  });
                }
              }
              return child;
            });
            return _react.default.createElement("div", {
              className: `collapsible ${isOpen ? 'open' : ''} ${className}`
            }, childrenWithProps);
          }
          function CollapsibleHeader({
            children,
            onClick,
            className = ''
          }) {
            return _react.default.createElement("div", {
              className: `collapsible-header ${className}`,
              onClick: onClick
            }, children, _react.default.createElement("span", {
              className: "collapsible-arrow"
            }, "\u25BC"));
          }
          function CollapsibleContent({
            children,
            isOpen = false,
            className = ''
          }) {
            return _react.default.createElement("div", {
              className: `collapsible-content ${isOpen ? 'open' : ''} ${className}`
            }, _react.default.createElement("div", {
              className: "collapsible-content-inner"
            }, children));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/context
      *********************************************************/

      ims.set('./views/languages/execution-panel/context', {
        hash: 729517742,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExecutionPanelContext = exports.ExecutionPanelContext = void 0;
          var _react = require("react");
          const ExecutionPanelContext = exports.ExecutionPanelContext = _react.default.createContext({});
          const useExecutionPanelContext = () => _react.default.useContext(ExecutionPanelContext);
          exports.useExecutionPanelContext = useExecutionPanelContext;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/editor
      ********************************************************/

      ims.set('./views/languages/execution-panel/editor', {
        hash: 1905683973,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Editor = Editor;
          var _react = require("react");
          var _editor = require("@aimpact/platform/components/editor");
          function Editor({
            value
          }) {
            const [editorValue, setEditorValue] = (0, _react.useState)(value);
            const [isLoading, setIsLoading] = (0, _react.useState)(false);
            (0, _react.useEffect)(() => {
              setIsLoading(true);
              setTimeout(() => {
                setEditorValue(value);
                setIsLoading(false);
              }, 300);
            }, [value]);
            return _react.default.createElement("div", {
              className: "execution-panel__editor"
            }, isLoading ? _react.default.createElement("div", {
              className: "execution-panel__editor-inner"
            }, _react.default.createElement("textarea", null)) : _react.default.createElement("div", {
              className: "execution-panel__editor-inner"
            }, _react.default.createElement(_editor.PromptEditor, {
              format: "plain",
              value: editorValue,
              onChange: () => {}
            })));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/literals
      **********************************************************/

      ims.set('./views/languages/execution-panel/literals', {
        hash: 869356405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiterals = PromptLiterals;
          var React = require("react");
          var _textarea = require("./textarea");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function PromptLiterals() {
            const literalInputs = [];
            const {
              store
            } = (0, _context.useModuleContext)();
            const promptExecutorStore = store.promptExecutorStore;
            (0, _hooks.useStore)(promptExecutorStore);
            const onChange = event => {
              const {
                name,
                value
              } = event.target;
              const literalName = name.replace(/-/g, '_');
              promptExecutorStore.setLiteralValue(literalName, value);
            };
            promptExecutorStore.literals.forEach(literal => {
              const value = promptExecutorStore.values[literal];
              literalInputs.push(React.createElement("div", {
                key: literal,
                className: "literal-field"
              }, React.createElement("label", {
                className: "literal-label"
              }, literal), React.createElement(_textarea.CustomTextarea, {
                name: literal,
                value: value ?? '',
                onChange: onChange,
                className: "literal-textarea"
              })));
            });
            return React.createElement(React.Fragment, null, literalInputs);
          }
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/main-content
      **************************************************************/

      ims.set('./views/languages/execution-panel/main-content', {
        hash: 1533739632,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContent = MainContent;
          var _react = require("react");
          var _context = require("../../context");
          var _tabs = require("./tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _editor = require("./editor");
          function MainContent({
            prompt
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const promptExecutorStore = store.promptExecutorStore;
            const [activeTab, setActiveTab] = (0, _react.useState)('prompt');
            const [value, setValue] = (0, _react.useState)(prompt.value || '');
            (0, _hooks.useStore)(promptExecutorStore);
            const handleTabClick = action => {
              setActiveTab(action);
              if (action === 'prompt') {
                action = 'value';
              }
              setValue(promptExecutorStore[action] || '');
            };
            const tabs = [{
              id: 'prompt',
              label: texts?.tabs?.prompt || 'Prompt',
              action: 'prompt'
            }, {
              id: 'expanded',
              label: texts?.tabs?.expanded || 'Expanded',
              action: 'expanded'
            }, {
              id: 'parsed',
              label: texts?.tabs?.parsed || 'Parsed',
              action: 'parsed'
            }, {
              id: 'schema',
              label: texts?.tabs?.schema || 'Schema',
              action: 'schema'
            }];
            return _react.default.createElement("main", {
              className: "execution-main-content"
            }, _react.default.createElement("header", {
              className: "panel-header"
            }, _react.default.createElement("h6", {
              className: "p-0 m-0"
            }, prompt.name || 'Prompt Execution')), _react.default.createElement("div", {
              className: "execution-panel__tabs-container"
            }, _react.default.createElement(_tabs.Tabs, {
              tabs: tabs,
              activeTab: activeTab,
              onTabClick: handleTabClick
            })), _react.default.createElement(_editor.Editor, {
              value: value
            }));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/prompt-result
      ***************************************************************/

      ims.set('./views/languages/execution-panel/prompt-result', {
        hash: 1208080898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptResult = void 0;
          var React = require("react");
          var _reactJsonViewLite = require("react-json-view-lite");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          const PromptResult = ({
            value
          }) => {
            let result = value;
            let type = 'text';
            try {
              type = 'json';
              result = JSON.parse(value);
            } catch (e) {
              result = value;
            }
            if (type === 'json') {
              try {
                return React.createElement(_reactJsonViewLite.JsonView, {
                  data: result,
                  style: _reactJsonViewLite.defaultStyles
                });
              } catch (e) {
                return React.createElement("span", null, "Invalid JSON");
              }
            }
            return React.createElement(_markdown.Markdown, null, result);
          };
          exports.PromptResult = PromptResult;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/result
      ********************************************************/

      ims.set('./views/languages/execution-panel/result', {
        hash: 2918448596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Result = Result;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _promptResult = require("./prompt-result");
          function Result({
            prompt
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const promptExecutorStore = store.promptExecutorStore;
            (0, _hooks.useStore)(promptExecutorStore, ['result.changed', 'fetching.changed']);
            const handleExecute = () => {
              promptExecutorStore.execute();
            };
            return _react.default.createElement("section", {
              className: "execution-result"
            }, _react.default.createElement("header", {
              className: "panel-header"
            }, _react.default.createElement("h6", {
              className: "p-0 m-0"
            }, "Result"), _react.default.createElement(_icons.IconButton, {
              icon: "play",
              onClick: handleExecute,
              variant: "default",
              title: texts?.result?.execute || 'Execute',
              className: "execute-icon-button",
              disabled: promptExecutorStore.fetching
            })), _react.default.createElement("div", {
              className: "execution-panel__result-content"
            }, promptExecutorStore.fetching && _react.default.createElement("div", {
              className: "loading"
            }, "Loading..."), promptExecutorStore.result && _react.default.createElement(_promptResult.PromptResult, {
              value: promptExecutorStore.result
            }), !promptExecutorStore.fetching && !promptExecutorStore.result && _react.default.createElement("div", {
              className: "no-result"
            }, _react.default.createElement("div", {
              className: "no-result-message"
            }, texts?.result?.empty || 'No result available'))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/tabs
      ******************************************************/

      ims.set('./views/languages/execution-panel/tabs', {
        hash: 3038975677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = Tabs;
          var _react = require("react");
          function Tabs({
            tabs,
            activeTab,
            onTabClick
          }) {
            const handleTabClick = event => {
              event.preventDefault();
              const action = event.currentTarget.getAttribute('data-action');
              if (action) {
                onTabClick(action);
              }
            };
            return _react.default.createElement("div", {
              className: "tabs-container"
            }, tabs.map(tab => _react.default.createElement("a", {
              key: tab.id,
              href: "#",
              className: `tab-link ${activeTab === tab.action ? 'active' : ''}`,
              "data-action": tab.action,
              onClick: handleTabClick
            }, tab.label)));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/languages/execution-panel/textarea
      **********************************************************/

      ims.set('./views/languages/execution-panel/textarea', {
        hash: 2536826755,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomTextarea = CustomTextarea;
          var _react = require("react");
          function CustomTextarea({
            value = '',
            onChange,
            placeholder = '',
            className = '',
            disabled = false,
            name,
            readOnly = false,
            onFocus,
            onBlur,
            ...rest
          }) {
            const textareaRef = (0, _react.useRef)(null);
            const handleChange = event => {
              const textarea = event.target;
              textarea.style.height = 'auto';
              textarea.style.height = `${textarea.scrollHeight}px`;
              if (onChange) {
                onChange(event);
              }
            };
            return _react.default.createElement("textarea", {
              ref: textareaRef,
              value: value,
              onChange: handleChange,
              onFocus: onFocus,
              onBlur: onBlur,
              placeholder: placeholder,
              className: `clean-textarea ${className}`,
              disabled: disabled,
              readOnly: readOnly,
              name: name,
              rows: 1,
              ...rest
            });
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/languages/index
      ***************************************/

      ims.set('./views/languages/index', {
        hash: 2963188221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguagesPanel = LanguagesPanel;
          var _react = require("react");
          var _template = require("./template");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          /*bundle*/
          function LanguagesPanel() {
            const {
              setMinimized,
              store
            } = (0, _context.useModuleContext)();
            const [panels, setPanels] = (0, _react.useState)(1);
            const output = [];
            if (store.defaultLanguage) {
              output.push(_react.default.createElement(_template.FormLanguageTemplate, {
                key: `${store.defaultLanguage}-panel`,
                total: panels,
                execution: store.execution,
                onClose: () => setPanels(1),
                language: store.defaultLanguage
              }));
            }
            if (panels > 1) {
              for (let i = 0; i < panels - 1; i++) {
                output.push(_react.default.createElement(_template.FormLanguageTemplate, {
                  key: `${store.defaultLanguage}-panel-${i}`,
                  total: panels,
                  onClose: () => setPanels(panels - 1),
                  language: store.defaultLanguage
                }));
              }
            }
            const onCompare = () => {
              setMinimized(true);
              setPanels(2);
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "languages-container"
            }, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-center flex-vertical-center"
            }, _react.default.createElement("h3", null, "Prompt definition"), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              disabled: panels > 1,
              variant: "primary",
              onClick: onCompare
            }, "Compare"))), _react.default.createElement("div", {
              className: "languages-panels-wrapper"
            }, output));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/languages/template
      ******************************************/

      ims.set('./views/languages/template', {
        hash: 4190085982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormLanguageTemplate = FormLanguageTemplate;
          var _framerMotion = require("framer-motion");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _clsx = require("clsx");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _toast = require("pragmate-ui/toast");
          var _executionPanel = require("./execution-panel");
          function FormLanguageTemplate({
            total,
            onClose,
            language,
            execution
          }) {
            const {
              store,
              texts,
              languagesOptions
            } = (0, _context.useModuleContext)();
            const [selectedLanguage, setSelectedLanguage] = (0, _react.useState)(language);
            const [showDrawer, setshowDrawer] = (0, _react.useState)(execution);
            const [fetching, setFetching] = (0, _react.useState)(false);
            const template = store.getLanguageTemplate(selectedLanguage);
            (0, _hooks.useStore)(template);
            if (!template || template.ready) return null;
            const handleTextChange = e => {
              if (!template) return;
              template.set({
                value: e.target.value
              });
            };
            const onLanguageChange = async event => {
              try {
                const value = event.currentTarget.value;
                event.stopPropagation();
                setFetching(true);
                setSelectedLanguage(value);
                await store.loadLanguageTemplate(value);
              } finally {
                setFetching(false);
              }
            };
            const onSave = async () => {
              if (!selectedLanguage) return;
              await store.saveLanguage(selectedLanguage);
              _toast.toast.success('Template saved successfully');
            };
            const openModal = () => {
              // Configurar el prompt en el promptExecutorStore antes de abrir el modal
              if (template?.value) {
                store.promptExecutorStore.setPrompt(template);
              }
              setshowDrawer(true);
            };
            const closeModal = () => setshowDrawer(false);
            return _react.default.createElement("div", {
              className: "language-panel"
            }, _react.default.createElement(_framerMotion.motion.div, {
              className: (0, _clsx.default)('form-language', {
                'is-fetching': fetching
              })
            }, _react.default.createElement("div", {
              className: "form-language__container"
            }, _react.default.createElement("header", {
              className: "form-language__header"
            }, _react.default.createElement("div", {
              className: "form-language__title"
            }, _react.default.createElement("h3", {
              className: "form-language__title-text"
            }, selectedLanguage ? texts.languages[selectedLanguage] : 'Select Language')), _react.default.createElement("div", {
              className: "form-language__controls"
            }, _react.default.createElement("div", {
              className: "form-language__language-selector"
            }, _react.default.createElement(_form.Select, {
              value: selectedLanguage,
              id: "selectLanguageType",
              options: [{
                value: '',
                label: 'Select...'
              }, ...languagesOptions],
              onChange: onLanguageChange,
              className: "form-language__select"
            })), _react.default.createElement("div", {
              className: "form-language__actions"
            }, total > 1 && _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              className: "form-language__action-btn form-language__action-btn--close",
              icon: "close",
              onClick: onClose
            }), _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              className: "form-language__action-btn form-language__action-btn--play",
              icon: "play",
              onClick: openModal,
              title: "Execute"
            }), _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              className: "form-language__action-btn form-language__action-btn--save",
              icon: "save",
              onClick: onSave,
              disabled: !template.unpublished,
              title: "Save"
            })))), _react.default.createElement("div", {
              className: "form-language__content"
            }, _react.default.createElement("textarea", {
              className: "form-language__textarea",
              disabled: fetching,
              value: template.value ?? '',
              onChange: handleTextChange,
              placeholder: "Enter your prompt template here..."
            })))), _react.default.createElement(_executionPanel.ModalExecutionPanel, {
              show: showDrawer,
              onClose: closeModal,
              prompt: template
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/prompt/identifier
      *****************************************/

      ims.set('./views/prompt/identifier', {
        hash: 2067637041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Identifier = void 0;
          var React = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          const Identifier = () => {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement("div", {
              className: "identifier-title__container flex-container"
            }, React.createElement("span", null, store.prompt.identifier ?? 'Identifier'), React.createElement(_icons.Icon, {
              icon: "activeSurvey",
              title: texts.identifierInfo
            }));
          };
          exports.Identifier = Identifier;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompt/index
      ************************************/

      ims.set('./views/prompt/index', {
        hash: 353617834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplate = PromptTemplate;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _languages = require("./languages");
          var _literals = require("./literals");
          var _identifier = require("./identifier");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _formSelect = require("../components/form-select");
          function PromptTemplate({
            toggle
          }) {
            const {
              store,
              texts,
              minimized
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const save = async () => {
              setFetching(true);
              await store.savePrompt();
              setFetching(false);
            };
            (0, _hooks.useStore)(store.prompt);
            const onHandleChange = e => {
              const {
                name,
                value
              } = e.currentTarget;
              if (name) {
                store.prompt.set({
                  [name]: value
                });
              }
            };
            const handleSelectChange = field => value => {
              store.prompt.set({
                [field]: value
              });
            };
            const typeOptions = [{
              value: 'none',
              label: 'Select...'
            }, {
              value: 'prompt',
              label: 'Prompt'
            }, {
              value: 'dependency',
              label: 'Dependency'
            }, {
              value: 'function',
              label: 'Function'
            }];
            const formatOptions = [{
              value: 'none',
              label: 'Select...'
            }, {
              value: 'text',
              label: 'Text'
            }, {
              value: 'json',
              label: 'Json'
            }, {
              value: 'json_schema',
              label: 'Schema'
            }];
            // Convertir LLMs a opciones para FormSelect
            const modelOptions = [{
              value: 'none',
              label: 'Select...'
            }, ...store.llms.items.map(llm => ({
              value: llm.id,
              label: llm.name,
              description: llm.backend && llm.url ? `${llm.backend} - ${llm.url}` : llm.backend || llm.url || ''
            }))];
            if (minimized) {
              return _react.default.createElement("div", {
                className: "prompt-template__form minimized-panel"
              }, _react.default.createElement("button", {
                className: "open-overlay-btn",
                onClick: toggle
              }, "\uD83C\uDF10"));
            }
            return _react.default.createElement("div", {
              className: "prompt-template__form"
            }, _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              label: texts.header,
              variant: "floating",
              disabled: store.fetching,
              type: "text",
              name: "name",
              value: store.prompt.name,
              onChange: onHandleChange,
              placeholder: texts.header,
              required: true
            }), _react.default.createElement(_identifier.Identifier, null)), _react.default.createElement("section", {
              className: "row"
            }, _react.default.createElement("div", {
              className: "select-group"
            }, _react.default.createElement("label", {
              className: "form-select-label"
            }, "Type"), _react.default.createElement(_formSelect.FormSelect, {
              options: typeOptions,
              onChange: handleSelectChange('is'),
              value: store.prompt.is || 'none'
            })), _react.default.createElement("div", {
              className: "select-group"
            }, _react.default.createElement("label", {
              className: "form-select-label"
            }, "Format"), _react.default.createElement(_formSelect.FormSelect, {
              options: formatOptions,
              onChange: handleSelectChange('format'),
              value: store.prompt.format || 'none'
            }))), _react.default.createElement("section", {
              className: "row"
            }, _react.default.createElement("div", {
              className: "form-select-group"
            }, _react.default.createElement("label", {
              className: "form-select-label"
            }, "Model"), _react.default.createElement(_formSelect.FormSelect, {
              options: modelOptions,
              onChange: handleSelectChange('model'),
              value: store.prompt.model || 'none'
            }))), _react.default.createElement(_languages.Languages, null), _react.default.createElement(_literals.Literals, null), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: save,
              variant: "primary",
              label: "Save",
              fetching: fetching
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/prompt/languages
      ****************************************/

      ims.set('./views/prompt/languages', {
        hash: 165507048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          function Languages() {
            const {
              store,
              texts,
              languagesOptions
            } = (0, _context.useModuleContext)();
            const currentLanguage = store.prompt.language?.default || '';
            const handleLanguageChange = event => {
              const selectedLanguage = event.target.value;
              if (selectedLanguage) {
                const language = {
                  default: selectedLanguage,
                  languages: [selectedLanguage]
                };
                store.prompt.set({
                  language
                });
              }
            };
            const selectOptions = [{
              value: '',
              label: 'Select a language...'
            }, ...languagesOptions];
            return _react.default.createElement("section", {
              className: "form-section languages-section"
            }, _react.default.createElement("div", {
              className: "form-field"
            }, _react.default.createElement("span", null, texts.form.subtitleLanguage), _react.default.createElement(_form.Select, {
              id: "languageSelect",
              options: selectOptions,
              value: currentLanguage,
              onChange: handleLanguageChange
            })));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/prompt/literals
      ***************************************/

      ims.set('./views/prompt/literals', {
        hash: 1039589427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Literals = Literals;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          function Literals() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const output = store.prompt.literals?.dependencies?.map((dependency, idx) => {
              const name = dependency.toLowerCase();
              return _react.default.createElement("li", {
                key: `${dependency}-${idx}`
              }, _react.default.createElement(_components.Link, {
                href: `/prompts/management?projectId=${store.projectId}&promptId=ailearn.${name}`,
                target: "_blank"
              }, dependency));
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "form-section literals-section"
            }, store.prompt.literals?.pure?.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.form.subtitleLiterals), _react.default.createElement("div", {
              className: "literals-container"
            }, store.prompt.literals?.pure?.map((literal, idx) => _react.default.createElement("span", {
              key: `${literal}-${idx}`,
              className: "chip literals-chip"
            }, literal))))), _react.default.createElement("div", {
              className: "dependencies-container"
            }, store.prompt.literals?.dependencies?.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.form.subtitleDependencies), _react.default.createElement("ul", null, output))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/languages/index",
        "from": "LanguagesPanel",
        "name": "LanguagesPanel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'LanguagesPanel') && _export("LanguagesPanel", LanguagesPanel = require ? require('./views/languages/index').LanguagesPanel : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVscyIsIl9iYXNlIiwiX3JvdXRpbmciLCJfYmV5b25kX2NvbnRleHQiLCJfcHJvbXB0RXhlY3V0b3JTdG9yZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpZCIsInByb21wdEV4ZWN1dG9yU3RvcmUiLCJlcnJvciIsImlzTmV3IiwibW9kZWwiLCJwcm9qZWN0SWQiLCJwcm9tcHQiLCJkZXBlbmRlbmNpZXMiLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImRlZmF1bHRMYW5ndWFnZSIsImRlZmF1bHQiLCJwcm9tcHRzIiwibGxtcyIsImxhbmd1YWdlVGVtcGxhdGVzIiwiTWFwIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwcm9wZXJ0aWVzIiwicHJvbXB0UmVzb2x2ZXIiLCJQcm9tcHRSZXNvbHZlciIsIlByb21wdEV4ZWN1dG9yU3RvcmUiLCJMTE1zIiwiZ2xvYmFsVGhpcyIsInMiLCJxcyIsImdldCIsImxhbmciLCJleGVjdXRpb24iLCJlcnJvcnMiLCJwdXNoIiwibGVuZ3RoIiwiY29uc29sZSIsImpvaW4iLCJzZXQiLCJQcm9taXNlIiwiYWxsIiwiQXBwV3JhcHBlciIsImdldFByb21wdHMiLCJtYXAiLCJQcm9tcHQiLCJFcnJvciIsInRwbCIsImdldExhbmd1YWdlVGVtcGxhdGUiLCJzZXRQcm9tcHQiLCJsaXRlcmFscyIsInB1cmUiLCJmb3JFYWNoIiwiaXRlbSIsImxpdGVyYWxWYWx1ZSIsInVuZGVmaW5lZCIsInNldExpdGVyYWxWYWx1ZSIsImUiLCJyZWFkeSIsImxvYWRMYW5ndWFnZVRlbXBsYXRlIiwiaW5zdGFuY2UiLCJoYXMiLCJQcm9tcHRMYW5ndWFnZVRlbXBsYXRlIiwiaWRlbnRpZmllciIsImxhbmd1YWdlcyIsInRyaWdnZXIiLCJzYXZlUHJvbXB0IiwicHVibGlzaCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJsb2ciLCJzYXZlTGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZVRvTGFuZ3VhZ2VUZW1wbGF0ZSIsInRlbXBsYXRlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsInBhcmVudCIsImFuYWx5emVkIiwiYW5hbHl6ZSIsInZhbHVlIiwiaXRlbXMiLCJpbml0aWFsVmFsdWVzIiwibGl0ZXJhbCIsInJlc29sdmVkIiwicmVzb2x2ZSIsImV4cGFuZGVkIiwicGFyc2VkIiwidmFsdWVzIiwiY3VycmVudFZhbHVlcyIsImV4ZWN1dGUiLCJmZXRjaGluZyIsInJlc3VsdCIsIkV4ZWN1dG9yIiwiZXhlY3V0ZVByb21wdCIsInR5cGUiLCJmb3JtYXQiLCJtZXNzYWdlIiwiUmVhY3QiLCJTZWxlY3QiLCJfcmVhY3RJY29ucyIsIkZvcm1TZWxlY3QiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJpbnRlcm5hbFZhbHVlIiwic2V0SW50ZXJuYWxWYWx1ZSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJmaXJzdEl0ZW1SZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVPcGVuQ2hhbmdlIiwiaXNPcGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudCIsImZvY3VzIiwib25DaGFuZ2VMaXN0ZW5lciIsIm5ld1ZhbHVlIiwiYWN0dWFsVmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUm9vdCIsIm9uVmFsdWVDaGFuZ2UiLCJvbk9wZW5DaGFuZ2UiLCJUcmlnZ2VyIiwiY2xhc3NOYW1lIiwiVmFsdWUiLCJwbGFjZWhvbGRlciIsIkljb24iLCJDaGV2cm9uRG93bkljb24iLCJQb3J0YWwiLCJDb250ZW50IiwicG9zaXRpb24iLCJWaWV3cG9ydCIsIm9wdCIsImlkeCIsIkl0ZW0iLCJrZXkiLCJyZWYiLCJ0YWJJbmRleCIsIkl0ZW1UZXh0IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsIkl0ZW1JbmRpY2F0b3IiLCJDaGVja0ljb24iLCJzZXRWYWx1ZSIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfY2xzeCIsIl9jb250ZXh0IiwiX2xhbmd1YWdlcyIsIl9pbmRleCIsIm1pbmltaXplZCIsInNldE1pbmltaXplZCIsInRleHRzIiwiZ2xvYmFsVGV4dHMiLCJ1c2VTdG9yZSIsImxhbmd1YWdlc09wdGlvbnMiLCJjb250YWluZXJDbGFzc05hbWUiLCJ0b2dnbGVMZWZ0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlIiwibGF5b3V0IiwiaGVhZGVyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJwYWdlVGl0bGUiLCJ0aXRsZSIsImJvZHkiLCJGcmFnbWVudCIsIlByb21wdFRlbXBsYXRlIiwidG9nZ2xlIiwiTGFuZ3VhZ2VzUGFuZWwiLCJfaWNvbnMiLCJfZHJhd2VyIiwiX2FzaWRlIiwiX21haW5Db250ZW50IiwiX3Jlc3VsdCIsIk1vZGFsRXhlY3V0aW9uUGFuZWwiLCJvbkNsb3NlIiwiRHJhd2VyIiwiTWFpbkNvbnRlbnQiLCJFeGVjdXRpb25Bc2lkZSIsIlJlc3VsdCIsIkFwcEljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIl9saXRlcmFscyIsIlByb21wdExpdGVyYWxzIiwiQ29sbGFwc2libGUiLCJjaGlsZHJlbiIsImRlZmF1bHRPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlT3BlbiIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjbG9uZUVsZW1lbnQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJFeGVjdXRpb25QYW5lbENvbnRleHQiLCJ1c2VFeGVjdXRpb25QYW5lbENvbnRleHQiLCJfZWRpdG9yIiwiRWRpdG9yIiwiZWRpdG9yVmFsdWUiLCJzZXRFZGl0b3JWYWx1ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNldFRpbWVvdXQiLCJQcm9tcHRFZGl0b3IiLCJfdGV4dGFyZWEiLCJsaXRlcmFsSW5wdXRzIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwibGl0ZXJhbE5hbWUiLCJyZXBsYWNlIiwiQ3VzdG9tVGV4dGFyZWEiLCJfdGFicyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImhhbmRsZVRhYkNsaWNrIiwiYWN0aW9uIiwidGFicyIsInNjaGVtYSIsIlRhYnMiLCJvblRhYkNsaWNrIiwiX3JlYWN0SnNvblZpZXdMaXRlIiwiX21hcmtkb3duIiwiUHJvbXB0UmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiSnNvblZpZXciLCJkYXRhIiwic3R5bGUiLCJkZWZhdWx0U3R5bGVzIiwiTWFya2Rvd24iLCJfcHJvbXB0UmVzdWx0IiwiaGFuZGxlRXhlY3V0ZSIsIkljb25CdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJlbXB0eSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhYiIsImhyZWYiLCJyZWFkT25seSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJyZXN0IiwidGV4dGFyZWFSZWYiLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0YXJlYSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInJvd3MiLCJfdGVtcGxhdGUiLCJfY29tcG9uZW50cyIsIl9mcmFtZXJNb3Rpb24iLCJwYW5lbHMiLCJzZXRQYW5lbHMiLCJvdXRwdXQiLCJGb3JtTGFuZ3VhZ2VUZW1wbGF0ZSIsInRvdGFsIiwiaSIsIm9uQ29tcGFyZSIsIm1vdGlvbiIsImRpdiIsIkJ1dHRvbiIsIl9mb3JtIiwiX3RvYXN0IiwiX2V4ZWN1dGlvblBhbmVsIiwic2VsZWN0ZWRMYW5ndWFnZSIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJzaG93RHJhd2VyIiwic2V0c2hvd0RyYXdlciIsInNldEZldGNoaW5nIiwiaGFuZGxlVGV4dENoYW5nZSIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJvblNhdmUiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwidW5wdWJsaXNoZWQiLCJJZGVudGlmaWVyIiwiaWRlbnRpZmllckluZm8iLCJfaWRlbnRpZmllciIsIl9mb3JtU2VsZWN0Iiwic2F2ZSIsIm9uSGFuZGxlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiZmllbGQiLCJ0eXBlT3B0aW9ucyIsImZvcm1hdE9wdGlvbnMiLCJtb2RlbE9wdGlvbnMiLCJsbG0iLCJiYWNrZW5kIiwidXJsIiwiSW5wdXQiLCJyZXF1aXJlZCIsImlzIiwiTGFuZ3VhZ2VzIiwiTGl0ZXJhbHMiLCJoYW5kbGVMYW5ndWFnZUNoYW5nZSIsInNlbGVjdE9wdGlvbnMiLCJmb3JtIiwic3VidGl0bGVMYW5ndWFnZSIsImRlcGVuZGVuY3kiLCJ0b0xvd2VyQ2FzZSIsIkxpbmsiLCJzdWJ0aXRsZUxpdGVyYWxzIiwic3VidGl0bGVEZXBlbmRlbmNpZXMiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90cy9zdG9yZS9wcm9tcHQtZXhlY3V0b3Itc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9ybS1zZWxlY3QudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL21vZGVsLXNlbGVjdC50c3giLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvYXNpZGUudHN4IiwiLy90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL2NvbGxhcHNpYmxlLnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL2VkaXRvci50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvbGl0ZXJhbHMudHN4IiwiLy90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL21haW4tY29udGVudC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvcHJvbXB0LXJlc3VsdC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvcmVzdWx0LnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC90YWJzLnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC90ZXh0YXJlYS50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy90ZW1wbGF0ZS50c3giLCIvL3RzL3ZpZXdzL3Byb21wdC9pZGVudGlmaWVyLnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0L2xhbmd1YWdlcy50c3giLCIvL3RzL3ZpZXdzL3Byb21wdC9saXRlcmFscy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFB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