System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/reactive@2.1.1/model", "react@18.3.1", "@radix-ui/react-select@2.2.6", "@radix-ui/react-icons@1.3.2", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks", "clsx@2.1.1", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/drawer", "@aimpact/platform@0.1.6/components/editor", "pragmate-ui@1.0.8/components", "react-json-view-lite@2.5.0", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/icons", "framer-motion@11.18.2", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/toast"], function (_export, _context2) {
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
    }, function (_aimpactPlatform016Models) {
      dependency_4 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_5 = _aimpactPlatform016StoresBase;
    }, function (_beyondJsKernel0114Routing) {
      dependency_6 = _beyondJsKernel0114Routing;
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
    }, function (_pragmateUi108Modal) {
      dependency_14 = _pragmateUi108Modal;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@aimpact/platform/stores/base', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['react', dependency_8], ['@radix-ui/react-select', dependency_9], ['@radix-ui/react-icons', dependency_10], ['@aimpact/platform/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['clsx', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/drawer', dependency_15], ['@aimpact/platform/components/editor', dependency_16], ['pragmate-ui/components', dependency_17], ['react-json-view-lite', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['pragmate-ui/icons', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/toast', dependency_23]]);
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
        hash: 3536920517,
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
              console.log(0.1, this.uri.vars.get('projectId'));
              this.#store.load(
              // 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
              this.uri.vars.get('projectId'), this.uri.vars.get('promptId'), this.uri.qs.get('lang'));
            }
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 563992068,
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
            get id() {
              return this.#id;
            }
            get isNew() {
              return this.#id.includes('new');
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
            #ready = false;
            get ready() {
              return super.ready && this.#ready;
            }
            get promptExecutorStore() {
              return this.#promptExecutorStore;
            }
            constructor() {
              super(_beyond_context.module.specifier, {
                properties: ['comparedLanguage']
              });
              this.getLanguage = this.getLanguage.bind(this);
              this.promptResolver = _models.PromptResolver;
              this.#promptExecutorStore = new _promptExecutorStore.PromptExecutorStore(this);
              this.#llms = new _models.LLMs();
              super.ready = true;
            }
            extractLiterals(text) {
              const regex = /\{([a-zA-Z0-9_-]+)\}/g;
              const matches = [];
              let match;
              while ((match = regex.exec(text)) !== null) matches.push(match[1]);
              const pure = [];
              const dependencies = [];
              matches.forEach(match => {
                match = match.toUpperCase();
                const i = this.dependencies.find(d => d.name.toUpperCase() === match);
                i ? dependencies.push(match) : pure.push(match);
              });
              this.#prompt.literals = {
                dependencies,
                pure
              };
              return this.#prompt.literals;
            }
            async load(projectId, id, lang) {
              const errors = [];
              !id && errors.push('id');
              !projectId && errors.push('projectId');
              if (errors.length) {
                console.error('Parameters not found: ', errors.join(', '));
                return;
              }
              this.#id = id;
              this.#projectId = projectId;
              // Cargar prompts y LLMs en paralelo
              const [prompts] = await Promise.all([_models.AppWrapper.getPrompts({
                projectId
              }), this.#llms.load()]);
              this.#prompts = prompts;
              // this.#prompt = new Prompt({ id, project: projectId });
              this.#prompt = prompts.map.get(id);
              this.model = this.#prompt;
              this.#currentLanguage = lang;
              if (!this.isNew) {
                await this.#prompt.load();
                if (this.#prompt.language?.default) {
                  this.#currentLanguage = this.#prompt.language.default;
                  await this.getLanguage(this.#prompt.language.default);
                }
                if (this.#prompt.error) {
                  console.error(this.#prompt.error);
                  return;
                }
              }
              this.#ready = true;
              this.trigger('change');
            }
            async savePrompt() {
              const languages = ['es', 'en'];
              this.fetching = true;
              const response = await this.#prompt.save(languages);
              if (response.error) {
                console.error(response.error);
                return;
              }
              if (this.isNew) {
                this.#id = response.data.id;
                _routing.routing.replaceState({}, '', `/prompts/management?promptId=${this.#id}`);
                return;
              }
            }
            async saveLanguage(lang) {
              this.#languageTemplates.get(lang).publish();
            }
            async getLanguage(language) {
              if (this.languageTemplates.has(language)) {
                return this.languageTemplates.get(language);
              }
              const instance = new _models.PromptLanguageTemplate({
                identifier: this.prompt.identifier
              });
              await instance.load({
                language
              });
              this.languageTemplates.set(language, instance);
              return instance;
            }
            async loadLanguageTemplate(language) {
              const instance = await this.getLanguage(language);
              return instance;
            }
            getLanguageTemplate(language) {
              if (!language) return new _models.PromptLanguageTemplate({
                identifier: this.prompt.identifier
              });
              return this.languageTemplates.get(language);
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
        hash: 4135048732,
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
              console.log(30, this.parsed);
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
        hash: 2249404537,
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
        hash: 380997513,
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
              minimized
            });
            const leftVariant = minimized ? 'minimized' : 'open';
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
              breadcrumb: [['Home', '/'], [globalTexts.modules.prompts, `/ailearn/prompts`], [texts.pageTitle, '']],
              title: texts.pageTitle
            }), _react.default.createElement(_ui.Page.body, {
              className: containerClassName
            }, _react.default.createElement(_index.PromptTemplate, {
              toggle: toggleLeft
            }), _react.default.createElement(_languages.LanguagesPanel, null))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/languages/execution-panel
      *************************************************/

      ims.set('./views/languages/execution-panel', {
        hash: 2186922681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalExecutionPanel = ModalExecutionPanel;
          var _react = require("react");
          var _drawer = require("pragmate-ui/drawer");
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
            })));
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
        hash: 3386198564,
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
            const [panels, setPanels] = (0, _react.useState)(1);
            const {
              setMinimized,
              store
            } = (0, _context.useModuleContext)();
            const panelVariants = {
              hidden: {
                x: '100%',
                opacity: 0
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  damping: 12,
                  stiffness: 100
                }
              }
            };
            const output = [];
            for (let i = 0; i < panels; i++) {
              const specs = {
                key: i,
                total: panels,
                onClose: () => setPanels(1),
                language: undefined
              };
              if (i === 0) {
                specs.language = store.currentLanguage;
              }
              output.push(_react.default.createElement(_framerMotion.motion.div, {
                key: i,
                variants: panelVariants,
                className: "language-panel"
              }, _react.default.createElement(_template.FormLanguageTemplate, {
                ...specs
              })));
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
        hash: 54301490,
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
            language
          }) {
            const {
              store,
              texts,
              languagesOptions
            } = (0, _context.useModuleContext)();
            const [selectedLanguage, setSelectedLanguage] = (0, _react.useState)(language);
            const [showDrawer, setshowDrawer] = (0, _react.useState)(false);
            const [fetching, setFetching] = (0, _react.useState)(false);
            const template = (0, _react.useMemo)(() => {
              return store.getLanguageTemplate(selectedLanguage);
            }, [selectedLanguage]);
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
                await store.loadLanguageTemplate(value);
                setSelectedLanguage(value);
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.motion.div, {
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
        hash: 433606488,
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
            const save = async () => {
              await store.savePrompt();
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
            const modelOptions = store.llms.items.map(llm => ({
              value: llm.id,
              label: llm.name,
              description: llm.backend && llm.url ? `${llm.backend} - ${llm.url}` : llm.backend || llm.url || ''
            }));
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
            }, _react.default.createElement("div", null, _react.default.createElement("section", {
              className: "form-section"
            }, _react.default.createElement(_form.Input, {
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
              onChange: handleSelectChange('is')
            })), _react.default.createElement("div", {
              className: "select-group"
            }, _react.default.createElement("label", {
              className: "form-select-label"
            }, "Format"), _react.default.createElement(_formSelect.FormSelect, {
              options: formatOptions,
              onChange: handleSelectChange('format')
            }))), _react.default.createElement("section", {
              className: "row"
            }, _react.default.createElement("div", {
              className: "form-select-group"
            }, _react.default.createElement("label", {
              className: "form-select-label"
            }, "Model"), _react.default.createElement(_formSelect.FormSelect, {
              options: modelOptions,
              onChange: handleSelectChange('model')
            }))), _react.default.createElement(_languages.Languages, null), _react.default.createElement(_literals.Literals, null)), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: save,
              variant: "primary",
              label: "Save"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/prompt/languages
      ****************************************/

      ims.set('./views/prompt/languages', {
        hash: 1644385060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          // import { ButtonGroup } from 'pragmate-ui/components';
          function Languages() {
            const {
              store,
              texts,
              languagesOptions
            } = (0, _context.useModuleContext)();
            let supported = store.prompt.language?.languages ?? [];
            supported = new Set(supported);
            const [languages, setLanguages] = (0, _react.useState)(supported.size);
            const click = event => {
              const {
                value
              } = event.currentTarget;
              !supported.has(value) ? supported.add(value) : supported.delete(value);
              setLanguages(supported.size);
              const defaultLang = supported.size ? [...supported][0] : undefined;
              const language = {
                default: defaultLang,
                languages: [...supported]
              };
              store.prompt.set({
                language
              });
            };
            let output = languagesOptions.map(language => {
              const active = supported.has(language.value) ? 'is-active' : '';
              return _react.default.createElement(_components.Button, {
                key: language.value,
                title: language.label,
                onClick: click,
                bordered: true,
                value: language.value,
                label: language.value,
                className: active
              });
            });
            return _react.default.createElement("section", {
              className: "form-section languages-section"
            }, _react.default.createElement("div", {
              className: "form-field"
            }, _react.default.createElement("span", null, texts.form.subtitleLanguage), _react.default.createElement("div", {
              className: "languages-buttons-container"
            }, output)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/prompt/literals
      ***************************************/

      ims.set('./views/prompt/literals', {
        hash: 1377379490,
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
              console.log(1, dependency);
              return _react.default.createElement("li", {
                key: `${dependency}-${idx}`
              }, _react.default.createElement(_components.Link, {
                href: `prompts/management?projectId=${store.projectId}&promptId=ailearn.${name}`
              }, dependency));
            });
            return _react.default.createElement("section", {
              className: "form-section languages-section"
            }, store.prompt.literals?.pure?.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.form.subtitleLiterals), _react.default.createElement("p", null, store.prompt.literals?.pure?.join(' - '))), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsInFzIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX2Jhc2UiLCJfcm91dGluZyIsIl9iZXlvbmRfY29udGV4dCIsIl9wcm9tcHRFeGVjdXRvclN0b3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsImlkIiwicHJvbXB0RXhlY3V0b3JTdG9yZSIsImlzTmV3IiwiaW5jbHVkZXMiLCJwcm9qZWN0SWQiLCJwcm9tcHQiLCJkZXBlbmRlbmNpZXMiLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInByb21wdHMiLCJsbG1zIiwibGFuZ3VhZ2VUZW1wbGF0ZXMiLCJNYXAiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicHJvcGVydGllcyIsImdldExhbmd1YWdlIiwiYmluZCIsInByb21wdFJlc29sdmVyIiwiUHJvbXB0UmVzb2x2ZXIiLCJQcm9tcHRFeGVjdXRvclN0b3JlIiwiTExNcyIsImV4dHJhY3RMaXRlcmFscyIsInRleHQiLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicHVyZSIsImZvckVhY2giLCJ0b1VwcGVyQ2FzZSIsImkiLCJmaW5kIiwiZCIsIm5hbWUiLCJsaXRlcmFscyIsImxhbmciLCJlcnJvcnMiLCJsZW5ndGgiLCJlcnJvciIsImpvaW4iLCJQcm9taXNlIiwiYWxsIiwiQXBwV3JhcHBlciIsImdldFByb21wdHMiLCJtYXAiLCJtb2RlbCIsImRlZmF1bHQiLCJ0cmlnZ2VyIiwic2F2ZVByb21wdCIsImxhbmd1YWdlcyIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJzYXZlIiwiZGF0YSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJzYXZlTGFuZ3VhZ2UiLCJwdWJsaXNoIiwiaGFzIiwiaW5zdGFuY2UiLCJQcm9tcHRMYW5ndWFnZVRlbXBsYXRlIiwiaWRlbnRpZmllciIsInNldCIsImxvYWRMYW5ndWFnZVRlbXBsYXRlIiwiZ2V0TGFuZ3VhZ2VUZW1wbGF0ZSIsInNldExhbmd1YWdlVG9MYW5ndWFnZVRlbXBsYXRlIiwidGVtcGxhdGUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50Iiwic2V0UHJvbXB0IiwiYW5hbHl6ZWQiLCJhbmFseXplIiwidmFsdWUiLCJpdGVtcyIsImluaXRpYWxWYWx1ZXMiLCJsaXRlcmFsIiwicmVzb2x2ZWQiLCJyZXNvbHZlIiwiZXhwYW5kZWQiLCJwYXJzZWQiLCJ2YWx1ZXMiLCJzZXRMaXRlcmFsVmFsdWUiLCJjdXJyZW50VmFsdWVzIiwiZXhlY3V0ZSIsInJlc3VsdCIsIkV4ZWN1dG9yIiwiZXhlY3V0ZVByb21wdCIsInR5cGUiLCJmb3JtYXQiLCJtZXNzYWdlIiwiUmVhY3QiLCJTZWxlY3QiLCJfcmVhY3RJY29ucyIsIkZvcm1TZWxlY3QiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJmaXJzdEl0ZW1SZWYiLCJ1c2VSZWYiLCJoYW5kbGVPcGVuQ2hhbmdlIiwiaXNPcGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudCIsImZvY3VzIiwib25DaGFuZ2VMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJSb290Iiwib25WYWx1ZUNoYW5nZSIsIm9uT3BlbkNoYW5nZSIsIlRyaWdnZXIiLCJjbGFzc05hbWUiLCJWYWx1ZSIsIkljb24iLCJDaGV2cm9uRG93bkljb24iLCJQb3J0YWwiLCJDb250ZW50IiwicG9zaXRpb24iLCJWaWV3cG9ydCIsIm9wdCIsImlkeCIsIkl0ZW0iLCJrZXkiLCJyZWYiLCJ1bmRlZmluZWQiLCJ0YWJJbmRleCIsIkl0ZW1UZXh0IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsIkl0ZW1JbmRpY2F0b3IiLCJDaGVja0ljb24iLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2Nsc3giLCJfY29udGV4dCIsIl9sYW5ndWFnZXMiLCJfaW5kZXgiLCJtaW5pbWl6ZWQiLCJzZXRNaW5pbWl6ZWQiLCJ0ZXh0cyIsImdsb2JhbFRleHRzIiwidXNlU3RvcmUiLCJsYW5ndWFnZXNPcHRpb25zIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwibGVmdFZhcmlhbnQiLCJ0b2dnbGVMZWZ0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlIiwibGF5b3V0IiwiaGVhZGVyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJwYWdlVGl0bGUiLCJ0aXRsZSIsImJvZHkiLCJQcm9tcHRUZW1wbGF0ZSIsInRvZ2dsZSIsIkxhbmd1YWdlc1BhbmVsIiwiX2RyYXdlciIsIl9hc2lkZSIsIl9tYWluQ29udGVudCIsIl9yZXN1bHQiLCJNb2RhbEV4ZWN1dGlvblBhbmVsIiwib25DbG9zZSIsIkRyYXdlciIsIk1haW5Db250ZW50IiwiRXhlY3V0aW9uQXNpZGUiLCJSZXN1bHQiLCJfbGl0ZXJhbHMiLCJQcm9tcHRMaXRlcmFscyIsIkNvbGxhcHNpYmxlIiwiY2hpbGRyZW4iLCJkZWZhdWx0T3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU9wZW4iLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiY2xvbmVFbGVtZW50Iiwib25DbGljayIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkV4ZWN1dGlvblBhbmVsQ29udGV4dCIsInVzZUV4ZWN1dGlvblBhbmVsQ29udGV4dCIsIl9lZGl0b3IiLCJFZGl0b3IiLCJlZGl0b3JWYWx1ZSIsInNldEVkaXRvclZhbHVlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIlByb21wdEVkaXRvciIsIl90ZXh0YXJlYSIsImxpdGVyYWxJbnB1dHMiLCJldmVudCIsInRhcmdldCIsImxpdGVyYWxOYW1lIiwicmVwbGFjZSIsIkN1c3RvbVRleHRhcmVhIiwiRnJhZ21lbnQiLCJfdGFicyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImhhbmRsZVRhYkNsaWNrIiwiYWN0aW9uIiwidGFicyIsInNjaGVtYSIsIlRhYnMiLCJvblRhYkNsaWNrIiwiX3JlYWN0SnNvblZpZXdMaXRlIiwiX21hcmtkb3duIiwiUHJvbXB0UmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZSIsIkpzb25WaWV3Iiwic3R5bGUiLCJkZWZhdWx0U3R5bGVzIiwiTWFya2Rvd24iLCJfaWNvbnMiLCJfcHJvbXB0UmVzdWx0IiwiaGFuZGxlRXhlY3V0ZSIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsImRpc2FibGVkIiwiZW1wdHkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0YWIiLCJocmVmIiwicGxhY2Vob2xkZXIiLCJyZWFkT25seSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJyZXN0IiwidGV4dGFyZWFSZWYiLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0YXJlYSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInJvd3MiLCJfdGVtcGxhdGUiLCJfY29tcG9uZW50cyIsIl9mcmFtZXJNb3Rpb24iLCJwYW5lbHMiLCJzZXRQYW5lbHMiLCJwYW5lbFZhcmlhbnRzIiwiaGlkZGVuIiwieCIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJvdXRwdXQiLCJzcGVjcyIsInRvdGFsIiwibW90aW9uIiwiZGl2IiwidmFyaWFudHMiLCJGb3JtTGFuZ3VhZ2VUZW1wbGF0ZSIsIm9uQ29tcGFyZSIsIkJ1dHRvbiIsIl9mb3JtIiwiX3RvYXN0IiwiX2V4ZWN1dGlvblBhbmVsIiwic2VsZWN0ZWRMYW5ndWFnZSIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJzaG93RHJhd2VyIiwic2V0c2hvd0RyYXdlciIsInNldEZldGNoaW5nIiwidXNlTWVtbyIsImhhbmRsZVRleHRDaGFuZ2UiLCJvbkxhbmd1YWdlQ2hhbmdlIiwic3RvcFByb3BhZ2F0aW9uIiwib25TYXZlIiwidG9hc3QiLCJzdWNjZXNzIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsInVucHVibGlzaGVkIiwiSWRlbnRpZmllciIsImlkZW50aWZpZXJJbmZvIiwiX2lkZW50aWZpZXIiLCJfZm9ybVNlbGVjdCIsIm9uSGFuZGxlQ2hhbmdlIiwiaGFuZGxlU2VsZWN0Q2hhbmdlIiwiZmllbGQiLCJ0eXBlT3B0aW9ucyIsImZvcm1hdE9wdGlvbnMiLCJtb2RlbE9wdGlvbnMiLCJsbG0iLCJiYWNrZW5kIiwidXJsIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkxhbmd1YWdlcyIsIkxpdGVyYWxzIiwic3VwcG9ydGVkIiwiU2V0Iiwic2V0TGFuZ3VhZ2VzIiwic2l6ZSIsImNsaWNrIiwiYWRkIiwiZGVsZXRlIiwiZGVmYXVsdExhbmciLCJhY3RpdmUiLCJib3JkZXJlZCIsImZvcm0iLCJzdWJ0aXRsZUxhbmd1YWdlIiwiZGVwZW5kZW5jeSIsInRvTG93ZXJDYXNlIiwiTGluayIsInN1YnRpdGxlTGl0ZXJhbHMiLCJzdWJ0aXRsZURlcGVuZGVuY2llcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3Byb21wdC1leGVjdXRvci1zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvcm0tc2VsZWN0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL21vZGVsLXNlbGVjdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC9hc2lkZS50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC9jb2xsYXBzaWJsZS50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvZWRpdG9yLnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL2xpdGVyYWxzLnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL21haW4tY29udGVudC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC9wcm9tcHQtcmVzdWx0LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC90YWJzLnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL3RleHRhcmVhLnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy90ZW1wbGF0ZS50c3giLCIvdHMvdmlld3MvcHJvbXB0L2lkZW50aWZpZXIudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9pbmRleC50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xpdGVyYWxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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