<template>
  <!-- header -->
        <header class="header ">
          <div class="header-inner">
            <h1 class="header-logo">
              <a href=".">PORTFOLIO</a>
            </h1>
            <nav class="header-nav">
              <ul class="header-nav-list">
                <li class="header-nav-item"><a href="#works">WORKS</a></li>
                <li class="header-nav-item"><a href="#skill">SKILL</a></li>
                <li class="header-nav-item"><a href="#contact">CONTACT</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <!-- /header -->
</template>

<style scoped>
/*--------------------------------
ヘッダー
---------------------------------*/
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: rgba(255,255,255,0.5);
}

.header-logo {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  margin-right: 20px;
  letter-spacing: .05em;
}

.header-logo a {
  color: #333;
}

.header-nav-list {
  display: flex;
  justify-content: space-between;
}

.header-nav-item:not(:last-child) {
  margin-right: 20px;
}

.header-nav-item a {
  font-size: 13px;
  font-weight: bold;
  padding: 5px 0;
  letter-spacing: .05em;
  color: #333;
}

.header-nav-item a:hover {
  opacity: .8;
}
</style>