<template>
  <div class="root">
    <div class="top-parent">
      <ControlButton class="menu-btn" :iconSrc="menuIcon"/>
      <ControlButton class="home-btn" :iconSrc="homeIcon"/>
      <ControlButton class="back-btn" :iconSrc="backIcon"/>
    </div>
    <div class="center-parent">
      <img class="up-btn" src="../assets/up.png">
      <div class="center-btn-parent">
        <img class="left-btn" src="../assets/left.png">
        <div class="ok-btn-parent">OK</div>
        <img class="right-btn" src="../assets/right.png">
      </div>
      <img class="down-btn" src="../assets/down.png">
    </div>
  </div>
</template>

<script>

import home from '../assets/home.png'
import menu from '../assets/menu.png'
import back from '../assets/back.png'

export default {
  name: 'Controller',
  data () {
    return {
      homeIcon: home,
      menuIcon: menu,
      backIcon: back
    }
  }
}
</script>

<style scoped>
  .top-parent {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    border: none;
  }

  .menu-btn {
    margin-left: 10px;
    margin-top: auto;
  }

  .menu-btn:active {
    background-color: rgb(30, 30, 30);
  }

  .home-btn {
    margin-top: 10px;
  }

  .home-btn:active {
    background-color: rgb(30, 30, 30);
  }

  .back-btn {
    margin-right: 10px;
    margin-top: auto;
  }

  .back-btn:active {
    background-color: rgb(30, 30, 30);
  }

  .center-parent {
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    background-color: rgb(48, 48, 48);
    border-radius: 50%;
    margin: auto;
    width: 280px;
    height: 280px;
  }

  .center-btn-parent {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .left-btn {
    width: 60px;
    height: 60px;
    padding: 8px;
    border-radius: 50%;
  }

  .right-btn {
    width: 60px;
    height: 60px;
    padding: 8px;
    border-radius: 50%;
  }

  .down-btn {
    width: 60px;
    height: 60px;
    padding: 8px;
    border-radius: 50%;
  }

  .up-btn {
    width: 60px;
    height: 60px;
    padding: 8px;
    border-radius: 50%;
  }

  .ok-btn-parent {
    background-color: rgb(48, 48, 48);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    text-align: center;
    font-size: 35px;
    font-weight: lighter;
    color: white;
    line-height: 120px;
    margin: auto;
    border-style: solid;
    border-width: 5px;
    border-color: rgb(30, 30, 30);
  }

  .down-btn:active {
    background-color: rgb(30, 30, 30);
  }

  .left-btn:active {
    background-color: rgb(30, 30, 30);
  }

  .up-btn:active {
    background-color: rgb(30, 30, 30);
  }

  .right-btn:active {
    background-color: rgb(30, 30, 30);
  }

  .ok-btn-parent:active {
    background-color: rgb(30, 30, 30);
  }
</style>
