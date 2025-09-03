System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.1.1/model", "react@18.3.1", "@radix-ui/react-select@2.2.4", "@radix-ui/react-icons@1.3.2", "@aimpact/platform@0.1.6/components/ui", "@aimpact/platform@0.1.6/shared/hooks", "framer-motion@11.18.2", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/drawer", "@aimpact/platform@0.1.6/components/editor", "react-json-view-lite@2.4.1", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/toast"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, View, LanguagesPanel, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    LanguagesPanel: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016Models) {
      dependency_4 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_5 = _aimpactPlatform016StoresBase;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
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
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_12 = _aimpactPlatform016SharedHooks;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi108Components) {
      dependency_14 = _pragmateUi108Components;
    }, function (_pragmateUi108Modal) {
      dependency_15 = _pragmateUi108Modal;
    }, function (_pragmateUi108Drawer) {
      dependency_16 = _pragmateUi108Drawer;
    }, function (_aimpactPlatform016ComponentsEditor) {
      dependency_17 = _aimpactPlatform016ComponentsEditor;
    }, function (_reactJsonViewLite2) {
      dependency_18 = _reactJsonViewLite2;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_19 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Icons) {
      dependency_20 = _pragmateUi108Icons;
    }, function (_pragmateUi108Form) {
      dependency_21 = _pragmateUi108Form;
    }, function (_pragmateUi108Toast) {
      dependency_22 = _pragmateUi108Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@aimpact/platform/stores/base', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['react', dependency_8], ['@radix-ui/react-select', dependency_9], ['@radix-ui/react-icons', dependency_10], ['@aimpact/platform/components/ui', dependency_11], ['@aimpact/platform/shared/hooks', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/drawer', dependency_16], ['@aimpact/platform/components/editor', dependency_17], ['react-json-view-lite', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['pragmate-ui/icons', dependency_20], ['pragmate-ui/form', dependency_21], ['pragmate-ui/toast', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "prompts-view",
        "vspecifier": "@aimpact/platform@0.1.6/prompts-view.widget",
        "is": "page",
        "route": "/projects/${projectId}/prompts/view/${promptId}",
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
        hash: 3429857438,
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
                _routing.routing.replaceState({}, '', `/ailearn/prompts/view/${this.#id}`);
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
        hash: 722485535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _languages = require("./languages");
          var _index = require("./prompt/index");
          const leftPanelVariants = {
            open: {
              x: 0,
              width: '100%',
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20
              }
            },
            minimized: {
              x: 0,
              width: 60,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20
              }
            }
          };
          /*bundle*/
          function View({
            store
          }) {
            const [minimized, setMinimized] = (0, _react.useState)(false);
            const {
              ready,
              fetching,
              texts
            } = store;
            (0, _hooks.useStore)(store);
            if (!ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const languagesOptions = store.languages;
            const cls = `prompt-template-form-container ${minimized ? 'minimized' : ''}`;
            const leftVariant = minimized ? 'minimized' : 'open';
            const toggleLeft = () => setMinimized(false);
            const containerCls = `platform-page-container${fetching ? ' is-fetching' : ''}`;
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
            }, _react.default.createElement("div", {
              className: containerCls
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['Home', '/'], ['Prompts', `/ailearn/prompts`], [texts.pageTitle, '']]
            }), _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_framerMotion.motion.div, {
              className: "prompt-panel",
              variants: leftPanelVariants,
              animate: leftVariant
            }, _react.default.createElement(_index.PromptTemplate, {
              toggle: toggleLeft
            })), _react.default.createElement(_languages.LanguagesPanel, null))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/languages/execution-panel
      *************************************************/

      ims.set('./views/languages/execution-panel', {
        hash: 3044126849,
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
            }, _react.default.createElement(_aside.ExecutionAside, {
              prompt: prompt
            }), _react.default.createElement(_mainContent.MainContent, {
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
        hash: 2435205054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiterals = PromptLiterals;
          var React = require("react");
          var _textarea = require("./textarea");
          var _context = require("../../context");
          var _hooks = require("@aimpact/platform/shared/hooks");
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
        hash: 2054684199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContent = MainContent;
          var _react = require("react");
          var _context = require("../../context");
          var _tabs = require("./tabs");
          var _hooks = require("@aimpact/platform/shared/hooks");
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
              id: 'parsed',
              label: texts?.tabs?.parsed || 'Parsed',
              action: 'parsed'
            }, {
              id: 'expanded',
              label: texts?.tabs?.expanded || 'Expanded',
              action: 'expanded'
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
        hash: 366898780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Result = Result;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@aimpact/platform/shared/hooks");
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
        hash: 3773792424,
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
              className: "flex-container flex-space-between flex-center"
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
        hash: 2985098754,
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
          var _context = require("../context");
          var _hooks = require("@aimpact/platform/shared/hooks");
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
              className: `form-language ${fetching ? 'is-fetching' : ''}`
            }, _react.default.createElement("header", {
              className: "flex-center flex-container flex-space-between"
            }, _react.default.createElement("h5", null, selectedLanguage ? _react.default.createElement(_react.default.Fragment, null, " ", texts.languages[selectedLanguage]) : null), _react.default.createElement("div", {
              className: "flex-container gap-05 flex-center flex-vertical-center"
            }, total > 1 ? _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              className: "circle",
              icon: "close",
              onClick: onClose
            }) : null, _react.default.createElement(_form.Select, {
              value: selectedLanguage,
              id: "selectLanguageType",
              options: [{
                value: '',
                label: 'Select...'
              }, ...languagesOptions],
              onChange: onLanguageChange
            }), _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              "data-title": "execute",
              className: "circle",
              icon: "play",
              onClick: openModal
            }), _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              "data-title": "execute",
              className: "circle",
              icon: "save",
              onClick: onSave,
              disabled: !template.unpublished
            }))), _react.default.createElement(_form.Textarea, {
              className: "form-language__textarea",
              disabled: fetching,
              value: template.value ?? '',
              onChange: handleTextChange
            })), _react.default.createElement(_executionPanel.ModalExecutionPanel, {
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
        hash: 3515124533,
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
          var _hooks = require("@aimpact/platform/shared/hooks");
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
            const defaultType = store.isNew ? 'none' : store.prompt.is;
            const defaultFormat = store.isNew ? 'none' : store.prompt.format;
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
        hash: 1610774474,
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
                href: `/projects/${store.projectId}/prompts/view/ailearn.${name}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsInFzIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX2Jhc2UiLCJfcm91dGluZyIsIl9iZXlvbmRfY29udGV4dCIsIl9wcm9tcHRFeGVjdXRvclN0b3JlIiwiQmFzZVN0b3JlTWFuYWdlciIsImlkIiwicHJvbXB0RXhlY3V0b3JTdG9yZSIsImlzTmV3IiwiaW5jbHVkZXMiLCJwcm9qZWN0SWQiLCJwcm9tcHQiLCJkZXBlbmRlbmNpZXMiLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInByb21wdHMiLCJsbG1zIiwibGFuZ3VhZ2VUZW1wbGF0ZXMiLCJNYXAiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicHJvcGVydGllcyIsImdldExhbmd1YWdlIiwiYmluZCIsInByb21wdFJlc29sdmVyIiwiUHJvbXB0UmVzb2x2ZXIiLCJQcm9tcHRFeGVjdXRvclN0b3JlIiwiTExNcyIsImV4dHJhY3RMaXRlcmFscyIsInRleHQiLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicHVyZSIsImZvckVhY2giLCJ0b1VwcGVyQ2FzZSIsImkiLCJmaW5kIiwiZCIsIm5hbWUiLCJsaXRlcmFscyIsImxhbmciLCJlcnJvcnMiLCJsZW5ndGgiLCJlcnJvciIsImpvaW4iLCJQcm9taXNlIiwiYWxsIiwiQXBwV3JhcHBlciIsImdldFByb21wdHMiLCJtYXAiLCJtb2RlbCIsImRlZmF1bHQiLCJ0cmlnZ2VyIiwic2F2ZVByb21wdCIsImxhbmd1YWdlcyIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJzYXZlIiwiZGF0YSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJzYXZlTGFuZ3VhZ2UiLCJwdWJsaXNoIiwiaGFzIiwiaW5zdGFuY2UiLCJQcm9tcHRMYW5ndWFnZVRlbXBsYXRlIiwiaWRlbnRpZmllciIsInNldCIsImxvYWRMYW5ndWFnZVRlbXBsYXRlIiwiZ2V0TGFuZ3VhZ2VUZW1wbGF0ZSIsInNldExhbmd1YWdlVG9MYW5ndWFnZVRlbXBsYXRlIiwidGVtcGxhdGUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50Iiwic2V0UHJvbXB0IiwiYW5hbHl6ZWQiLCJhbmFseXplIiwidmFsdWUiLCJpdGVtcyIsImluaXRpYWxWYWx1ZXMiLCJsaXRlcmFsIiwicmVzb2x2ZWQiLCJyZXNvbHZlIiwiZXhwYW5kZWQiLCJwYXJzZWQiLCJ2YWx1ZXMiLCJzZXRMaXRlcmFsVmFsdWUiLCJjdXJyZW50VmFsdWVzIiwiZXhlY3V0ZSIsInJlc3VsdCIsIkV4ZWN1dG9yIiwiZXhlY3V0ZVByb21wdCIsInR5cGUiLCJmb3JtYXQiLCJtZXNzYWdlIiwiUmVhY3QiLCJTZWxlY3QiLCJfcmVhY3RJY29ucyIsIkZvcm1TZWxlY3QiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJmaXJzdEl0ZW1SZWYiLCJ1c2VSZWYiLCJoYW5kbGVPcGVuQ2hhbmdlIiwiaXNPcGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VycmVudCIsImZvY3VzIiwib25DaGFuZ2VMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJSb290Iiwib25WYWx1ZUNoYW5nZSIsIm9uT3BlbkNoYW5nZSIsIlRyaWdnZXIiLCJjbGFzc05hbWUiLCJWYWx1ZSIsIkljb24iLCJDaGV2cm9uRG93bkljb24iLCJQb3J0YWwiLCJDb250ZW50IiwicG9zaXRpb24iLCJWaWV3cG9ydCIsIm9wdCIsImlkeCIsIkl0ZW0iLCJrZXkiLCJyZWYiLCJ1bmRlZmluZWQiLCJ0YWJJbmRleCIsIkl0ZW1UZXh0IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsIkl0ZW1JbmRpY2F0b3IiLCJDaGVja0ljb24iLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2ZyYW1lck1vdGlvbiIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfbGFuZ3VhZ2VzIiwiX2luZGV4IiwibGVmdFBhbmVsVmFyaWFudHMiLCJ4Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIm1pbmltaXplZCIsInNldE1pbmltaXplZCIsInRleHRzIiwidXNlU3RvcmUiLCJTcGlubmVyIiwiYWN0aXZlIiwibGFuZ3VhZ2VzT3B0aW9ucyIsImNscyIsImxlZnRWYXJpYW50IiwidG9nZ2xlTGVmdCIsImNvbnRhaW5lckNscyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJwYWdlVGl0bGUiLCJtb3Rpb24iLCJkaXYiLCJ2YXJpYW50cyIsImFuaW1hdGUiLCJQcm9tcHRUZW1wbGF0ZSIsInRvZ2dsZSIsIkxhbmd1YWdlc1BhbmVsIiwiX2RyYXdlciIsIl9hc2lkZSIsIl9tYWluQ29udGVudCIsIl9yZXN1bHQiLCJNb2RhbEV4ZWN1dGlvblBhbmVsIiwib25DbG9zZSIsIkRyYXdlciIsIkV4ZWN1dGlvbkFzaWRlIiwiTWFpbkNvbnRlbnQiLCJSZXN1bHQiLCJfbGl0ZXJhbHMiLCJQcm9tcHRMaXRlcmFscyIsIkNvbGxhcHNpYmxlIiwiY2hpbGRyZW4iLCJkZWZhdWx0T3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU9wZW4iLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiY2xvbmVFbGVtZW50Iiwib25DbGljayIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkV4ZWN1dGlvblBhbmVsQ29udGV4dCIsInVzZUV4ZWN1dGlvblBhbmVsQ29udGV4dCIsIl9lZGl0b3IiLCJFZGl0b3IiLCJlZGl0b3JWYWx1ZSIsInNldEVkaXRvclZhbHVlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsIlByb21wdEVkaXRvciIsIl90ZXh0YXJlYSIsImxpdGVyYWxJbnB1dHMiLCJldmVudCIsInRhcmdldCIsImxpdGVyYWxOYW1lIiwicmVwbGFjZSIsIkN1c3RvbVRleHRhcmVhIiwiRnJhZ21lbnQiLCJfdGFicyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImhhbmRsZVRhYkNsaWNrIiwiYWN0aW9uIiwidGFicyIsInNjaGVtYSIsIlRhYnMiLCJvblRhYkNsaWNrIiwiX3JlYWN0SnNvblZpZXdMaXRlIiwiX21hcmtkb3duIiwiUHJvbXB0UmVzdWx0IiwiSlNPTiIsInBhcnNlIiwiZSIsIkpzb25WaWV3Iiwic3R5bGUiLCJkZWZhdWx0U3R5bGVzIiwiTWFya2Rvd24iLCJfaWNvbnMiLCJfcHJvbXB0UmVzdWx0IiwiaGFuZGxlRXhlY3V0ZSIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsInRpdGxlIiwiZGlzYWJsZWQiLCJlbXB0eSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhYiIsImhyZWYiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5Iiwib25Gb2N1cyIsIm9uQmx1ciIsInJlc3QiLCJ0ZXh0YXJlYVJlZiIsImhhbmRsZUNoYW5nZSIsInRleHRhcmVhIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwicm93cyIsIl90ZW1wbGF0ZSIsInBhbmVscyIsInNldFBhbmVscyIsInBhbmVsVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsIm91dHB1dCIsInNwZWNzIiwidG90YWwiLCJGb3JtTGFuZ3VhZ2VUZW1wbGF0ZSIsIm9uQ29tcGFyZSIsIkJ1dHRvbiIsIl9mb3JtIiwiX3RvYXN0IiwiX2V4ZWN1dGlvblBhbmVsIiwic2VsZWN0ZWRMYW5ndWFnZSIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJzaG93RHJhd2VyIiwic2V0c2hvd0RyYXdlciIsInNldEZldGNoaW5nIiwidXNlTWVtbyIsImhhbmRsZVRleHRDaGFuZ2UiLCJvbkxhbmd1YWdlQ2hhbmdlIiwic3RvcFByb3BhZ2F0aW9uIiwib25TYXZlIiwidG9hc3QiLCJzdWNjZXNzIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsInVucHVibGlzaGVkIiwiVGV4dGFyZWEiLCJJZGVudGlmaWVyIiwiaWRlbnRpZmllckluZm8iLCJfaWRlbnRpZmllciIsIl9mb3JtU2VsZWN0Iiwib25IYW5kbGVDaGFuZ2UiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJmaWVsZCIsInR5cGVPcHRpb25zIiwiZm9ybWF0T3B0aW9ucyIsImRlZmF1bHRUeXBlIiwiaXMiLCJkZWZhdWx0Rm9ybWF0IiwibW9kZWxPcHRpb25zIiwibGxtIiwiYmFja2VuZCIsInVybCIsIklucHV0IiwiaGVhZGVyIiwicmVxdWlyZWQiLCJMYW5ndWFnZXMiLCJMaXRlcmFscyIsInN1cHBvcnRlZCIsIlNldCIsInNldExhbmd1YWdlcyIsInNpemUiLCJjbGljayIsImFkZCIsImRlbGV0ZSIsImRlZmF1bHRMYW5nIiwiYm9yZGVyZWQiLCJmb3JtIiwic3VidGl0bGVMYW5ndWFnZSIsImRlcGVuZGVuY3kiLCJ0b0xvd2VyQ2FzZSIsIkxpbmsiLCJzdWJ0aXRsZUxpdGVyYWxzIiwic3VidGl0bGVEZXBlbmRlbmNpZXMiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90cy9zdG9yZS9wcm9tcHQtZXhlY3V0b3Itc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9ybS1zZWxlY3QudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL21vZGVsLXNlbGVjdC50c3giLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvYXNpZGUudHN4IiwiLy90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL2NvbGxhcHNpYmxlLnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL2VkaXRvci50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvbGl0ZXJhbHMudHN4IiwiLy90cy92aWV3cy9sYW5ndWFnZXMvZXhlY3V0aW9uLXBhbmVsL21haW4tY29udGVudC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvcHJvbXB0LXJlc3VsdC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9leGVjdXRpb24tcGFuZWwvcmVzdWx0LnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC90YWJzLnRzeCIsIi8vdHMvdmlld3MvbGFuZ3VhZ2VzL2V4ZWN1dGlvbi1wYW5lbC90ZXh0YXJlYS50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy90ZW1wbGF0ZS50c3giLCIvL3RzL3ZpZXdzL3Byb21wdC9pZGVudGlmaWVyLnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0L2xhbmd1YWdlcy50c3giLCIvL3RzL3ZpZXdzL3Byb21wdC9saXRlcmFscy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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