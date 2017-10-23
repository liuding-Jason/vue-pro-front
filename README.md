
# Vue Project 

## Discribe

Kuandd Operation system (OP) is a manage system of KDD , whose aimed user would be operation partment .  

## Frameworks
```
	Vue2.0 + Vue-Router + Vuex + webpack + ES6 + Iview2.0
```
## Content  
	
	src
		components : common components of our teram , the name of this kind of files  ##must## begin with `if-`
		config     : different config items in dev / test / production 
		images     : image source
		libs       : basis util functions source 
		store      : vuex store source
		styles     : theme style and common style
		template   : basis template base on `ejs`
		views      : views of pages
	router.js : router defination

## Vue-router 

Vue-router is the vue router defination plugin . It has two types of mode , hash mode and history mode . In this project , we would use history mode . And every router item would be defined with `require` to run async task , like below :
```
{
    path : "/testA" ,
    meta : {
        title : 'testA'
    } ,
    component : (resolve) => require(['./views/testA.vue'] , resolve)
} 
```
## Vuex 

Vuex is the vue state manage plugin , which has `state` 、`getters` 、'mutations' 、'actions' 、'modules' attributes . It would make it easy to communicate between two son components , or between son and grandparent components .

In this project , we would use many modules to manage different states . That is to say , you should use a new module defination with your new logic codes . I offer you simple and complex defination example in store contect . 

## Iview2.0

Iview2.0 is a component library based on vue2.0 . It actually contains almost every component which you could use in your web project . So we decide to use iview2.0 to be our component library . 

## To Begin
### Install
```bush
// install dependencies
npm install
```
### Development
```bush
// For the first time, run init to create index.html
npm run init
npm run dev
```
### Production(Build)
```bush
npm run build
```

