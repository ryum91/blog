---
title: Vue 2.x 버전과 TypeScript 를 같이 써 본 후기
date: '2020-05-12T09:00:00.169Z'
layout: post
path: '/post/5'
image: ./5_thumbnail.jpg
description: Vue 2.x 버전과 TypeScript 를 같이 써 본 후기를 작성해봤습니다.
tags:
  - vue
  - typescript
---

<!--more-->

Vue 2.x 버전과 TypeScript를 같이 써 본 후기를 작성해봤습니다.

---

## Vue와 TypeScript

Vue 2.x 버전에서 공식으로 지원하는 TypeScript와의 연동 방법은 매우 불편하다.
따라서 서드파티 라이브러리를 이용해야 하는데, 여러가지를 조사해 본 결과
`vue-property-decorator` 를 쓰는 것이 가장 깔끔하고 괜찮은 것 같았다. (이것 외에 별다른 선택지가 없기도 하다.)

또한 'vue-property-decorator' 는 `vue-class-component` 를 확장한 확장판이라고 볼 수 있다.
그러나 아이러니하게 'vue-class-component' 는 Vue를 만든 팀에서 정식으로 만든 패키지인데, 다소 사용하기 불편하고 기능적으로도 제한이 존재한다.  
따라서 대부분 'vue-property-decorator' 를 사용한다. (심지어 공식 홈페이지에서도 'vue-property-decorator' 사용을 권장한다.)

---

## 개발환경 구축

Vue 2버전과 TypeScript를 같이 사용하기 위한 환경 구축은 제일 간단하게 `vue-cli`를 사용하는 것이다.

```bash
# Execute command
$ vue create vue-ts-example

Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

**Check the feature** 부분에서 vuex, vue-router, ESLint 같은 도구들을 추가로 선택해도 무관하다.

---

## Class 방식의 Vue Component

'vue-class-component' 와 'vue-property-component' 이 두 개 라이브러리의 공통점은 Vue Component를 Class 방식으로 작성할 수 있는 것이다.  
따라서 TypeScript 와의 조합도 어느정도 어울린다.

```js
<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class Counter extends Vue {
  count: number = 0

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>
```

중간에 script 시작 부분에 lang="ts" 옵션을 주면 되고, Vue Instance를 extends 받아 컴포넌트를 작성하면 된다.  
또한 Data는 클래스의 멤버변수로 작성하면 되고, LifeCycle 메소드는 LifeCycle 이름으로 멤버 메소드를 만들어서 작성한다.  
그리고 위 소스에서는 'vue-class-component' 에서 `Component`를 import 받았는데,
'vue-property-decorator' 에서 `Vue` 와 `Component` 를 둘 다 import 받아 사용할 수 있다.

## vuex

vuex를 사용한다면 `vuex-class` 까지 같이 사용하면 아주 깔끔하게 개발 환경을 구축할 수 있다.

최종적인 예제 소스는 아래와 같다.

```js
<template>
  <div>
    <!-- Template -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

@Component
export default class Login extends Vue {
  @Getter('store/vuex')
  private vuexData!: string;

  // Data
  private data: string = '';

  // LifeCycle method
  private beforeMount() {
  }

  // Watch
  @Watch('data')
  private dataWatch(val: string) {
  }

  // Normal method
  private method() {
  }

  // Computed
  private get computed() {
    return '';
  }
}
</script>

<style lang="scss">
  // CSS
</style>
```

좀 더 자세한 사용 방법을 알고싶다면,
[vuex-class](https://github.com/ktsn/vuex-class) 와 [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) 에서 확인할 수 있다.

---

# 후기

이 조합을 먼저 사이드 프로젝트에 적용해봤고, 이후 업무적으로도 도입을 진행했었다.
그 결과 여러가지 느낀 점이나, 나만의 규칙들이 있었는데 그런 것들을 간략하게 소개한다.

---

## 이중 타입 선언

이런식으로 개발을 하다보면 이중으로 타입을 선언해야 하는 부분이 종종 있다.
대표적으로 `vuex-class`로 Helper를 사용하다보면, 가지고 온 Getter나 Mutation, Action 같은 것들을 모두 수동으로 타입을 선언해줘야 한다.
vuex 모듈을 선언할 때도 데이터의 타입을 선언해야 하는데, Helper로 가지고 올 때도 타입을 선언해야하는 것이다.

또한 `refs` 를 이용해서 template에서 사용 된 컴포넌트에 접근하고자 할 때도 컴포넌트 타입으로 수동으로 변환을 해줘야한다.

```js
this.$refs.testComponent as TestComponent
```

---

## Vue의 타입과 TypeScript의 타입

Props를 선언할 때 Props의 Type과 기본 값, 필수 여부를 선언할 수 있다.
하지만 이는 TypeScript의 타입과 별개의 타입이다. 따라서 두 개의 타입이 맞지 않을 수 있고,
두 번 타입을 선언해줘야 하는 불편함이 있다.

또한 타입이 primitive type이 아니라 특정 객체(Foo)라면,
Props에 기본으로 선언하는 타입은 Object가 되게 되고, TypeScript의 타입은 실제 데이터의 타입(Foo)로 선언한다.
이 점에서 부자연스러운 부분이라 생각해서 그냥 Props의 Type을 웬만하면 쓰지 않기로 했고, 모두 TypeScript의 Type으로 대체(?) 하기로 했다.

> Vue Component 에게 Props의 타입을 명시적으로 정하는게 아니라, 대체한다고 볼 순 없다.

---

## vuex-class 사용 규칙

vuex에서 관리하는 데이터가 커지면 커질수록 vuex 내부에서 Module 단위로 쪼개서 관리한다.
이때 사용되는 개념이 `namespace` 인데, 이 namespace를 똑같이 vuex-class에서 사용할 수 있다.

```js
@Getter('store/vuex') // 여기서 'namespace/속성명' 으로 사용한다.
private vuexData!: string;
```

이는 Getter와 Mutation, Action 모두 사용할 수 있다. 그러나 State를 직접 가져다 쓸 때는 이런 형식으로 namespace를 사용할 수 없다.

```js
@State(state => state.store.vuex)
private vuexData!: string;
```

따라서 **나는 vuex에서 State를 직접 가져오지 않고, 전부다 Getter를 선언해서 상태 데이터를 Getter로 가져오는 방법을 썼다.**

---

## 자동 완성 (Intellisense)

일반적인 Vue Component를 작성한 뒤 다른 Vue Component에서 가져다 쓸 때 Template 에서 자동 완성 기능을 사용할 수 있다.
(ex. props, method 등...)
하지만 Class 방식으로 Vue Component를 가져다 쓰면 이러한 자동 완성이 되지 않는다.  
그 이유는 Class 방식으로 컴포넌트를 작성하면 Decorator를 이용하게 되는데, 이 Decorator가 컴파일 시점에서 동작하기 때문이다.
따라서 이 점은 매우 불편한 점 중 하나라고 생각한다.

> vuetify 같은 것들은 TypeScript를 이용해도 자동완성이 되는 것 같은데. 정확히 방법을 모르겠다.

---

결과적으로 나의 총평을 **'쓸만은 하지만 불편하다'** 이다.  
어떻게 보면 정식으로 지원하지 않는 기술 스택인데, 그냥 억지로 끼워 맞춰놓은 듯 한 느낌을 받았다.
프로젝트 중간에는 '내가 무슨 호사를 누리겠다고 이걸 했을까?' 라는 생각도 했었다..
하지만 TypeScript를 한 번쯤 써보고 싶은 사람들은 해볼만하고, 충분히 가치있는 일이라 생각한다.

예전부터 들려오던 소문이었는데 Vue 3버전에서는 TypeScript와 연계가 좀 더 매끄러워 질것이라는 소문을 들은적이 있다.
아직 Vue 3버전이 정식 버전이 나오진 않았지만 어떻게 나올지 기대가 되기도 하고, 앞서 언급한 문제들이 과연 어떻게 해결될지 궁금하기도 하다.
