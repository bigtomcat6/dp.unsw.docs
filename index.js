

class DownloadButton extends HTMLElement {
    constructor() {
        super();
        // mode参数
        // open:shadow root 元素可以从 js 外部访问根节点,即element.shadowRoot
        // closed:拒绝从 js 外部访问关闭的 shadow root 节点
        const shadow = this.attachShadow({ mode: 'open' });

        const dname = this.getAttribute('name');
        const dlink = this.getAttribute('link');
        const dtype = this.getAttribute('type');


        const document = shadow.ownerDocument;
        const text = document.querySelector;
        const div = document.createElement('div');
        const template = `
            <div style="display:flex; height: 22px; align-items: center;">📄<a href="`+dlink+`" class="anchor" rel="noopener" style="text-decoration: none;" target="_blank">
            <div style="
                display: flex;
                box-sizing: border-box;
                color: #3882c6;
                font-family: 'Roboto Mono', Monaco, courier, monospace;
                font-size: 0.8rem;
                font-weight: 600;
                letter-spacing: 0;
                line-height: 1.6rem;
                padding-left: 10px;
                padding-right: 10px;
                word-spacing: 0.05rem;
                border-radius: 10px;
                margin-left: 10px;
                align-items: center;
                height: 22px;
                border: 1px solid #c7c7c7;
                white-space: nowrap;">
                    <div style="text-algin: center; line-height: normal; display: flex; margin-right: 3px; height:14px;"><embed src="/download.svg" type="image/svg+xml" /></div><div>`+dname+`</div></div> </a>
                    <div style="margin: 0 2px;
                    padding: 3px 10px;">
                    <div style="color: #7f8c8d;
                    font-weight: bold;
                    text-align: center;
                    line-height: normal;
                    font-size: x-small;
                    white-space: nowrap;">`+dtype+` document</div>
                    </div></div>
        `;
        div.innerHTML = template;
        shadow.appendChild(div);
    }
}
window.customElements.define('d-button', DownloadButton);


window.$docsify = {
    homepage: 'HOME.md',
    loadSidebar: true,
    loadNavbar: true,
    mergeNavbar: true,
    subMaxLevel: 3,
    auto2top: true,
    notFoundPage: 'https://unsw.cdn.t.bigtomcat.com/web/_404.md',
    topMargin: 90,
    loadFooter: true,
    loadFooter: 'https://unsw.cdn.t.bigtomcat.com/web/_footer.md',
    search: {
      maxAge: 86400000,
      paths: 'auto',
      placeholder: '搜索',
      noData: '没找到诶...要不再试试别的？',
      depth: 6,
      hideOtherSidebarContent: false,
    },


    vueGlobalOptions: {
      data() {
        return {
          count: 0,
        };
      },
      methods: {
        hello() {
          alert(this.message);
        },
      },
    },
    timeUpdater: {
      text: "",
      formatUpdated: "{YYYY}年{MM}月{DD}日{HH}:{mm}",
      whereToPlace: "top",  // "top" or "bottom", default to "bottom"
    },
    tabs: {
      persist: false,
      sync: false,
      theme: 'material',      // default ('classic' , 'material', false)
      tabComments: true,      // default
      tabHeadings: true       // default
    },
    /*topBanner: { 
      position: 'relative', 
      zIndex: '-1', 
      linkColor: '#42b983', 
      content: '**网站下周起暂停运营开始维护！**[]()', 
    },*/

    progress: {
      position: "top",
      color: "var(--theme-color,#42b983)",
      height: "3px",
    },
    autoFooter: {
      name:       'How',
      copyYear:   '2022',
      url:        'https://www.bigtomcat.com/',
      onBody: true,
    },/*
    latex: {
      inlineMath   : [['$', '$'], ['\\(', '\\)']], // default
      displayMath  : [['$$', '$$']],               // default
      customOptions: {}                            // default
    }*/
    
  }

    function yellow() {
      document.body.style.setProperty('--theme-color', 'yellow');
      document.body.style.setProperty('--docsifytabs-tab-highlight-color', 'yellow');
    }
    function red() {
      document.body.style.setProperty('--theme-color', 'red');
      document.body.style.setProperty('--docsifytabs-tab-highlight-color', 'red');
      /*
      addBackToTop({
        diameter: 56,
        backgroundColor: 'red',
        textColor: '#fff',
      });
      */

    }
    function _F7C242() {
      document.body.style.setProperty('--theme-color', '#F7C242');
      document.body.style.setProperty('--docsifytabs-tab-highlight-color', '#F7C242');
    }
    function _42b983() {
      document.body.style.setProperty('--theme-color', '#42b983');
      document.body.style.setProperty('--docsifytabs-tab-highlight-color', '#42b983');
    }
