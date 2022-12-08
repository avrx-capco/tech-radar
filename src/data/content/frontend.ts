const techContent = [
  {
    technology: "React",
    docsLink: "https://reactjs.org/",
    intro:
      '<a href="https://reactjs.org">React</a> is the world’s most popular JavaScript library that uses components to change content of a single-page Mobile and Web application without refreshing.',
    content: [
      {
        name: "State Management",
        intro:
          "Managing states is one of the biggest challenges in large web applications. Using React alone may not be sufficient to handle such complexity. We need a way to share data across components by creating a central store that holds all states of your application.",
        data: [
          {
            name: "Redux",
            description:
              '<a href="https://redux.js.org/">Redux</a> provides a central store for states that each component can access. Main building parts: store, actions, reducers and optional middleware.',
          },
          {
            name: "ContextAPI",
            description:
              '<a href="https://reactjs.org/docs/context.html" >Context</a> provides a way to pass data through the component tree without having to pass props down manually at every level and helps to avoid the prop-drilling problem. It has 3 main building parts: context, provider and consumer.',
          },
        ],
      },
      {
        name: "UI Libraries",
        intro: "",
        data: [
          {
            name: "MaterialUI",
            description:
              '<a href="https://material-ui.com/">Google’s Material Design</a> is a popular React UI library with responsive animations and it has been adopted by the wider design community.',
          },
          {
            name: "SemanticUI",
            description:
              '<a href="https://react.semantic-ui.com/">SemanticUI</a> contains pre-built semantic components that helps create responsive layouts.',
          },
          {
            name: "Ant Design of React",
            description:
              '<a href="https://ant.design/docs/react/introduce">Ant Design of React</a> contains a set of high-quality components and demos for building rich, interactive user interfaces.',
          },
        ],
      },
      {
        name: "Styling",
        intro:
          "The point of building a frontend User Interface with React is how flexible it can be, especially when it comes to building separate components. It is important to know that whatever styling strategy you may decide to use, you are still writing CSS. The difference is that the strategies together with the library make the process easier because of the uniqueness of React.",
        data: [
          {
            name: "CSS and SASS",
            description:
              'This involves using separate stylesheets like our conventional way of styling our HTML websites either with CSS or a CSS preprocessor called <a href="https://sass-lang.com/">SASS</a>.',
          },
          {
            name: "BEM - Block Element Modifier",
            description:
              "It's a CSS naming convention for writing cleaner and more readable CSS classes. <a href='http://getbem.com/'>BEM</a> aims to write independent CSS blocks increasing reusability.",
          },
          {
            name: "CSS Modules",
            description:
              "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. The key words here are scoped locally. With this, your CSS class names become similar to local variables in JavaScript. It goes into the compiler, and CSS comes out the other side.",
          },
          {
            name: "Styled Components",
            description:
              '<a href="https://styled-components.com/">styled-components</a> is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS.',
          },
        ],
      },
      {
        name: "Testing",
        intro:
          "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error. ",
        data: [
          {
            name: "Jest",
            description:
              '<a href="https://jestjs.io/">Jest</a> is an open-source testing framework. It comes with built-in mocking and assertion libraries, which also runs your tests concurrently in parallel, providing faster test execution.',
          },
          {
            name: "Enzyme",
            description:
              '<a href="https://enzymejs.github.io/enzyme/">Enzyme</a> is an open-source JavaScript testing utility by Airbnb and needs a testing library to provide a foundation for the tests it generates. Using Jest and Enzyme together results in cleaner testing code that’s also easier to debug when a test breaks. Jest as a test runner and assertion library, then use Enzyme to build the tests for their UI. ',
          },
          {
            name: "React Testing Library",
            description:
              'The <a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a> is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. ',
          },
          {
            name: "Cypress",
            description:
              "<a href='https://www.cypress.io/'>Cypress</a> is a JavaScript based end-to-end testing framework that doesn't use Selenium at all. It is built on top of Mocha, which is a feature-rich JavaScript test framework, making asynchronous testing simple. Cypress also uses a BDD/TDD assertion library and a browser that can be paired with any JavaScript testing framework.",
          },
        ],
      },
    ],
    examples: [
      {
        name: "Digital Engineering Framework",
        imageUrl:
          "https://general-gif-bucket.s3.eu-west-2.amazonaws.com/demo.gif",
        description:
          'A React, TypeScript web application that provides a more readable format of our Engineering Competency Framework to help explain performance expectations. Unit tests are written in Jest and React Testing Library, E2E tests are written in Cypress and are automated via <a href="https://github.com/features/actions">GitHub Actions</a>.',
      },
    ],
    reference: ["https://reactjs.org/", "https://redux.js.org/"],
  },
  {
    technology: "Angular",
    docsLink: "https://angular.io/docs",
    intro:
      '<a href="https://angular.io/">Angular</a> is a highly popular web development framework that offers rich user experiences, fast responsiveness, and code maintainability.',
    content: [
      {
        name: "State Management",
        intro:
          "Managing states is one of the biggest challenges in large web applications. State management is a key component when building applications. There are various approaches by which we can manage the state in an Angular application.",
        data: [
          {
            name: "NgRx",
            description:
              '<a href="https://ngrx.io">NgRX</a> is a framework for building reactive applications in Angular, managing global and local state. NgRx is inspired by the Redux pattern. Main building parts: store, actions, reducers, selectors and effects.',
          },
          {
            name: "NgXs",
            description:
              '<a href="https://ngxs.io">NgXs</a> is a state management pattern + library for Angular. It acts as a single source of truth for your application state, providing simple rules for predictable state mutations.',
          },
        ],
      },
      {
        name: "UI Libraries",
        intro: "",
        data: [
          {
            name: "MaterialUI",
            description:
              '<a href="https://material-ui.com/">Google’s Material Design</a> is a popular Angular UI library with responsive animations and it has been adopted by the wider design community.',
          },
          {
            name: "NG Bootstrap",
            description:
              '<a href="https://ng-bootstrap.github.io">NG Bootstrap</a> Angular widgets built from the ground up using only Bootstrap 5 CSS with APIs designed for the Angular ecosystem.',
          },
        ],
      },
      {
        name: "Styling",
        intro:
          "The point of building a frontend User Interface with Angular is how flexible it can be, especially when it comes to building separate components. It is important to know that whatever styling strategy you may decide to use, you are still writing CSS. The difference is that the strategies together with the library make the process easier.",
        data: [
          {
            name: "CSS and SASS",
            description:
              'This involves using separate stylesheets like our conventional way of styling our HTML websites either with CSS or a CSS preprocessor called <a href="https://sass-lang.com/">SASS</a>.',
          },
          {
            name: "BEM - Block Element Modifier",
            description:
              "It's a CSS naming convention for writing cleaner and more readable CSS classes. <a href='http://getbem.com/'>BEM</a> aims to write independent CSS blocks increasing reusability.",
          },
          {
            name: "CSS Modules",
            description:
              "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. The key words here are scoped locally. With this, your CSS class names become similar to local variables in JavaScript. It goes into the compiler, and CSS comes out the other side.",
          },
        ],
      },
      {
        name: "Testing",
        intro:
          "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error. ",
        data: [
          {
            name: "Jasmine",
            description:
              '<a href="https://jasmine.github.io/">Jasmine</a> is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.',
          },
          {
            name: "Karma",
            description:
              '<a href="https://karma-runner.github.io">Karma</a> is a test-runner for javascript apps, is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.',
          },
          {
            name: "Protractor",
            description:
              '<a href="https://www.protractortest.org">Protractor</a> is a wrapper around Selenium Webdriver that provides an automation test framework, which simulates user interaction with an Angular web application for a range of browsers and mobile devices. It provides all features of Selenium WebDriver along with Angular specific features for seamless end to end testing.',
          },
        ],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "Vue",
    docsLink: "https://vuejs.org/v2/guide/",
    intro:
      '<a href="https://vuejs.org>Vue</a> is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex',
    content: [
      {
        name: "State Management",
        intro:
          "Managing states is one of the biggest challenges in large web applications. State management is a key component when building applications. There are various approaches by which we can manage the state in Vue application.",
        data: [
          {
            name: "Pinia",
            description:
              "<a href='https://pinia.vuejs.org/'>Pinia</a> is a state management solution for Vue. js applications that's easy and intuitive to use. It's modular by default, extensible, and type-safe, making it a great choice for large scale apps.",
          },
          {
            name: "Vuex",
            description:
              '<a href="https://vuex.vuejs.org/">Vuex</a> is the state management library officially maintained by the Vue core team. It does not have a reputation of being easy to use, but that’s mainly because of trade-offs needed for being a powerful solution.',
          },
        ],
      },
      {
        name: "UI Libraries",
        intro: "",
        data: [
          {
            name: "Vuetify",
            description:
              '<a href="https://vuetifyjs.com/">Vuetify</a> is a complete UI framework built on top of Vuejs. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences.',
          },
          {
            name: "Quasar",
            description:
              '<a href="https://quasar.dev/">Quasar</a> is Vuejs based framework, which allows you as a web developer to quickly create responsive++ websites/apps,write code once and simultaneously deploy it as a website, a Mobile App and/or an Electron App. Yes, one codebase for all of them, helping you develop an app in record time by using a state-of-the-art CLI and backed by best-practice, blazing fast Quasar web components',
          },
        ],
      },
      {
        name: "Styling",
        intro:
          "The point of building a frontend User Interface with Vuejs is how flexible it can be, especially when it comes to building separate components. It is important to know that whatever styling strategy you may decide to use, you are still writing CSS. The difference is that the strategies together with the library make the process easier.",
        data: [
          {
            name: "CSS and SASS",
            description:
              'This involves using separate stylesheets like our conventional way of styling our HTML websites either with CSS or a CSS preprocessor called <a href="https://sass-lang.com/">SASS</a>.',
          },
          {
            name: "BEM - Block Element Modifier",
            description:
              "It's a CSS naming convention for writing cleaner and more readable CSS classes. <a href='http://getbem.com/'>BEM</a> aims to write independent CSS blocks increasing reusability.",
          },
          {
            name: "CSS Modules",
            description:
              "A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. The key words here are scoped locally. With this, your CSS class names become similar to local variables in JavaScript. It goes into the compiler, and CSS comes out the other side.",
          },
        ],
      },
      {
        name: "Testing",
        intro:
          "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error. ",
        data: [
          {
            name: "Vitest",
            description:
              "<a href='https://vitest.dev'>Vitest</a> is a blazing fast unit test framework powered by Vite.Vite's out-of-the-box support for common web patterns, features like glob imports and SSR primitives, and its many plugins and integrations are fostering a vibrant ecosystem",
          },
          {
            name: "Peeky",
            description:
              '<a href="https://peeky.dev">Peeky</a> is another fast unit test runner with first-class Vite integration. It is also created by a Vue core team member and offers a GUI-based testing interface.',
          },
          {
            name: "Cypress",
            description:
              "<a href='https://www.cypress.io/'>Cypress</a> is a JavaScript based end-to-end testing framework that doesn't use Selenium at all. It is built on top of Mocha, which is a feature-rich JavaScript test framework, making asynchronous testing simple. Cypress also uses a BDD/TDD assertion library and a browser that can be paired with any JavaScript testing framework.",
          },
        ],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "TypeScript",
    docsLink: "https://www.typescriptlang.org/docs/",
    intro:
      '<a href="https://www.typescriptlang.org/docs/">TypeScript</a> is an object-oriented scripting language invented and maintained by Microsoft. It is a well-structured and concise language which makes it a perfect choice for large and complex projects. TypeScript is a superset of JavaScript with optional static typing and compiles to plain JavaScript. Therefore, it can used on frontend for both desktop and mobile applications, in automation testing, on backend in Node.js as well as create and provision AWS infrastructure deployments via AWS CDK.<br/><br/><p style="max-width:600px; font-size:18px; font-style: italic; text-align: center">“TypeScript saves you time catching errors and providing fixes before you run code.”</p> <br/><span style="font-style:normal; font-size: 16px; float:right">Official TypeScript Documentation</span>',
    content: [
      {
        name: "Types",
        intro:
          "Types enhances code quality with meaning fewer bugs which helps teams achieve better performance and faster software releases",
        data: [
          {
            name: "Everyday Types",
            description:
              "Boolean, String, Number, Array, Object, any, function, interface, null, undefined, void ",
          },
          {
            name: "Other Interesting Types",
            description:
              "<ul><li>Unknown: The type-safe counterpart of any. </li><li>Never: Indicates the values that will never occur. </li><li>Union: Combines existing types to build a new one using a variety of operators. </li><li>Type Aliases: Allows developers to define custom types. </li> </ul>",
          },
        ],
      },
      {
        name: "Benefits of TypeScript",
        intro: "",
        data: [
          {
            name: "Type Checking",
            description:
              "Checking types at compile time helps developers find bugs before their code runs in the browser saving the time spent on debugging errors that would normally appear only at run time if they used plain JavaScript. ",
          },
          {
            name: "Easier Code Management",
            description:
              "Defining types can serve as a form of documentation for data structures. This helps teams to introduce new developers to the project faster as new engineers can get all the information directly from the development environment. ",
          },
        ],
      },
      {
        name: "Testing",
        intro:
          "The first purpose of testing is to prevent bugs from releasing to production. Testing ensures the features are functioning correctly for complex components and modular applications and is required for the effective performance of a software application or product making it more robust and less prone to error. ",
        data: [
          {
            name: "Jest",
            description:
              '<a href="https://jestjs.io/">Jest</a> is an open-source testing framework. It comes with built-in mocking and assertion libraries, which also runs your tests concurrently in parallel, providing faster test execution.',
          },
          {
            name: "Mocha",
            description:
              '<a href="https://mochajs.org/">Mocha</a> is a JavaScript test framework running on Node.js and in the browser. It is often used with external assertion libraries such as <a href="https://www.chaijs.com/">chai</a>.',
          },
          {
            name: "Jasmine",
            description:
              '<a href="https://jasmine.github.io/">Jasmine</a> is a popular Behaviour Driven Development testing framework for JavaScript/TypeScript. It’s great for websites and Node.js applications ',
          },
        ],
      },
    ],
    examples: [
      {
        name: "Digital Engineering Framework",
        imageUrl:
          "https://general-gif-bucket.s3.eu-west-2.amazonaws.com/demo.gif",
        description:
          'A React, TypeScript web application that provides a more readable format of our Engineering Competency Framework to help explain performance expectations. Unit tests are written in Jest and React Testing Library, E2E tests are written in Cypress and are automated via <a href="https://github.com/features/actions">GitHub Actions</a>.',
      },
    ],
    reference: [],
  },
];
export default techContent;
