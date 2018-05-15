# Web Components Demo with Angular Elements and OpenAI's Sentiment Neuron! 

## Show and Tell

[![Web Components](https://img.youtube.com/vi/ZssAz23SVvo/0.jpg)](https://www.youtube.com/watch?v=ZssAz23SVvo)

## Web Components Architecture Objectives (met by this PoC) 

1. Build Web Components with sufficiently complex structure and interactions (between and within) using Angular 6 and bootstrap them as a Custom Elements using Angular Elements.

2. Deploy Web Components that are functionally dependent, but structurally separate (in the DOM tree) using one script and only one set of dependencies (benefits: no duplication and no chance of deploying one but not the other.)

3. User interaction with the Web Components' underlying DOM elements as well as interactions between those inner DOM elements are supported via Angular bindings. Animation (style tweening) in response to user interaction is also supported via @angular/animations.

4. Enable both Angular 6 build (no Custom Elements) and Angular Elements build. The former produces an app. The latter produces reusable, independent (or dependent) Web Components.

5. Each Web Component may be instantiated multiple times in the same app via the corresponding Custom Elements in the HTML. Same with respect to inclusion in the AppComponent template in the Angular app build.

6. Multiple Web Components may be loaded in the same page, without any conflicts or redundat polyfills.  

7. Web Components based on Polymer, Sveltte, etc or vanilla Web Components may run on the same page as the said Web Component without any conflict.

8. Angular apps (AngularJS and Angular 2 thru N), React apps, Ember apps and any app (incl. vanilla JS and jQuery/Dojo apps) may use the said Web Components without any limitation.

Please see src/index-elements.html for how the produced Web Components are deployed and used, and how they communicate.

## Angular Elements Project Structure

The project is a standard Angular 6 project with a few additions:

```
src/app/element.module.ts:  
Module with the Angular components to be bootstrapped as Custom Elements. Imported by App Module so the Angular components and their framework dependencies may be used by the Angular app without redundant boilerplate (for Angular Elements and Angular app builds)

src/main.element.ts:         
bootstraps the Element Module (register Custom Elements)

build-elements.js:           
script to bundle the Web Components and generate an HTML file with the polyfills (and ZoneJS)

src/index-elements.html:    
See comments inside the file regarding deployment choices made
```

## OpenAI's Sentiment Neuron 

This Web Components PoC uses OpenAI's Sentiment Neuron, a Deep Learning, "Multiplicative LSTM"-based RNN Model that was initially trained to generate product reviews using unsupervised data (a set of 82M Amazon reviews) then turned into a sentiment classifier using supervised data* and L1 Regularization, which according to the researchers led to the discovery of a singular neuron in the network that had 92% accuracy in estimating the sentiment of input/output**

*100X smaller labeled set than in systems of similar performance, making this approach much more practical than existing approaches.

**based on the Stanford Sentiment Treebank: 91.8% accuracy versus the previous best of 90.2%.

The predictive accuracy of the Sentiment Neuron can be seen below with the two overlapping normal distributions of how positive and negative reviews were scored. Values from 0 to 1 are were likely to be representative of positive sentiment, with maximum probability at 1. Values from 0 to -1 are more likely to be representative of negative sentiment with maximum probability at -1. Anything above 1.0 was accurately positive. Anything below -1.0 was accurately negative.    

![image](https://image.ibb.co/gPdMMJ/sst_binary_sentiment_unit_vis.png)

The most interesting thing about this Deep Learning approach is that the network was trained to generate Reviews (unsupervised, using mLSTM RNN) by predicting the character and then turned into a sentiment classifer using labeled data and L1 Regularization. This hints at a basic relationship between sentence formation patterns and sentiment that the Sentiment Nueron (a single neuron in the network) is able to capture. This basic relationship should be of further interest to those who study formal theories of language. 

Having said that, the Sentiment Neuron seems to be oblivious to sarcasm. This may mean that the supervised data set was lacking sufficient examples of sarcastic reviews, or it could mean that sarcasm is an elusive quality, one that escapes generalization and is very specific to external cultural context. Nevertheless, I believe that this is interesting work that is worth bringing the attention of a wider audience.

## Development

The component can be developed as any other Angular component: run `ng serve` and navigate to `http://localhost:4200/`.

## Build

### UI

% yarn install

% yarn build <-- this builds an Angular 6 app

% yarn build:elements <-- this builds Angular Elements (Web Components)

### AI Model Server

Install Python3

Install pip 

Use pip3 in --user mode to install tdqm, tensorflow, sklearn and other dependencies

To run: python3 server.py

More details coming soon.

## Credits

This PoC extends the MIT licensed Angular Elements chat widget by [@beeman_nl](https://twitter.com/beeman_nl)

Many changes and improvements were made under the hood to meet the architectural objectives of this PoC as far as the project structure, NgModule imports and the deployment of web components. In addition, some enhancements were made to the interaction between the Web Components and to the site's responsive behavior. Finally, AI was added for a more interesting UX. 

This PoC extends OpenAI's Sentiment Neuron demo. It adds a RESTful server via Flask. 

# References 

Coming soon




