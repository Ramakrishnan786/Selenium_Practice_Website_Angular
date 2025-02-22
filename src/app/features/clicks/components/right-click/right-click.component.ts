import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-click',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="click-demo">
      <h2>Right Click (Context Menu) Demo</h2>
      <div class="demo-section">
        <h3>Example 1: Basic Right Click</h3>
        <button class="demo-button" (contextmenu)="handleRightClick($event, 'basic')" [class.clicked]="lastClicked === 'basic'">
          Right Click Me
        </button>
        <div class="code-snippet">
          <pre>
Actions actions = new Actions(driver);
WebElement element = driver.findElement(By.id("rightClickButton"));
actions.contextClick(element).perform();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 2: Right Click with Wait</h3>
        <button class="demo-button" (contextmenu)="handleRightClick($event, 'wait')" [class.clicked]="lastClicked === 'wait'">
          Right Click After Wait
        </button>
        <div class="code-snippet">
          <pre>
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("waitButton")));
Actions actions = new Actions(driver);
actions.contextClick(element).perform();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 3: Right Click with JavaScript</h3>
        <button class="demo-button" (contextmenu)="handleRightClick($event, 'js')" [class.clicked]="lastClicked === 'js'">
          JavaScript Right Click
        </button>
        <div class="code-snippet">
          <pre>
WebElement element = driver.findElement(By.id("jsButton"));
JavascriptExecutor executor = (JavascriptExecutor) driver;
String script = 
    "const evt = document.createEvent('MouseEvents');" +
    "evt.initEvent('contextmenu', true, true);" +
    "arguments[0].dispatchEvent(evt);";
executor.executeScript(script, element);
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 4: Handle Context Menu</h3>
        <div class="context-menu-demo" (contextmenu)="handleContextMenu($event)">
          <p>Right click in this area to see the custom context menu</p>
          <div class="custom-context-menu" *ngIf="showContextMenu" [style.top.px]="menuY" [style.left.px]="menuX">
            <div class="menu-item" (click)="handleMenuItem('edit')">Edit</div>
            <div class="menu-item" (click)="handleMenuItem('copy')">Copy</div>
            <div class="menu-item" (click)="handleMenuItem('delete')">Delete</div>
          </div>
        </div>
        <div class="code-snippet">
          <pre>
// First, right-click the element
Actions actions = new Actions(driver);
WebElement element = driver.findElement(By.id("contextMenuArea"));
actions.contextClick(element).perform();

// Then, handle the context menu items
WebElement menuItem = driver.findElement(By.xpath("//div[contains(&#64;class, 'menu-item') and text()='Edit']"));
menuItem.click();
          </pre>
        </div>
      </div>

      <div class="result-section" *ngIf="lastClicked || lastMenuItem">
        <h3>Last Action:</h3>
        <p>&#123;&#123;getActionDescription()&#125;&#125;</p>
      </div>
    </div>
  `,
  styles: [`
    .click-demo {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 30px;
      text-align: center;
    }

    .demo-section {
      background: white;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h3 {
      color: #00AC55;
      margin-bottom: 15px;
    }

    .demo-button {
      background-color: #00AC55;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 15px;
    }

    .demo-button:hover {
      background-color: #009247;
      transform: translateY(-2px);
    }

    .demo-button.clicked {
      animation: clickEffect 0.3s ease;
    }

    .context-menu-demo {
      position: relative;
      background: #f8f9fa;
      border: 2px dashed #00AC55;
      border-radius: 4px;
      padding: 20px;
      text-align: center;
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .custom-context-menu {
      position: fixed;
      background: white;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      overflow: hidden;
      z-index: 1000;
    }

    .menu-item {
      padding: 10px 20px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .menu-item:hover {
      background-color: #00AC55;
      color: white;
    }

    @keyframes clickEffect {
      0% { transform: scale(1); }
      50% { transform: scale(0.95); }
      100% { transform: scale(1); }
    }

    .code-snippet {
      background: #f8f9fa;
      border-radius: 4px;
      padding: 15px;
      margin-top: 10px;
    }

    .code-snippet pre {
      margin: 0;
      color: #2c3e50;
      font-family: 'Courier New', Courier, monospace;
      font-size: 14px;
      white-space: pre-wrap;
    }

    .result-section {
      background: #e8f5e9;
      border-radius: 8px;
      padding: 15px;
      margin-top: 20px;
    }

    .result-section h3 {
      color: #00AC55;
      margin-bottom: 10px;
    }

    .result-section p {
      color: #2c3e50;
      margin: 0;
    }
  `]
})
export class RightClickComponent {
  lastClicked: string | null = null;
  lastMenuItem: string | null = null;
  showContextMenu = false;
  menuX = 0;
  menuY = 0;

  handleRightClick(event: MouseEvent, type: string): void {
    event.preventDefault();
    this.lastClicked = type;
    this.lastMenuItem = null;
    this.showContextMenu = false;
  }

  handleContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.showContextMenu = true;
    this.menuX = event.clientX;
    this.menuY = event.clientY;
    this.lastClicked = 'menu';
    this.lastMenuItem = null;

    // Close menu when clicking outside
    const closeMenu = (e: MouseEvent) => {
      this.showContextMenu = false;
      document.removeEventListener('click', closeMenu);
    };
    document.addEventListener('click', closeMenu);
  }

  handleMenuItem(action: string): void {
    this.lastMenuItem = action;
    this.showContextMenu = false;
  }

  getActionDescription(): string {
    if (this.lastMenuItem) {
      return `Context menu item selected: ${this.lastMenuItem}`;
    }

    switch (this.lastClicked) {
      case 'basic':
        return 'Basic right click performed using Actions class';
      case 'wait':
        return 'Right click with explicit wait performed';
      case 'js':
        return 'JavaScript right click performed';
      case 'menu':
        return 'Custom context menu displayed';
      default:
        return '';
    }
  }
}
