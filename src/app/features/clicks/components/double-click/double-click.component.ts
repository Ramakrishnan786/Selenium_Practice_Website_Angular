import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-double-click',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="click-demo">
      <h2>Double Click Demo</h2>
      <div class="demo-section">
        <h3>Example 1: Basic Double Click</h3>
        <button class="demo-button" (dblclick)="handleDoubleClick('basic')" [class.clicked]="lastClicked === 'basic'">
          Double Click Me
        </button>
        <div class="code-snippet">
          <pre>
Actions actions = new Actions(driver);
WebElement element = driver.findElement(By.id("doubleClickButton"));
actions.doubleClick(element).perform();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 2: Double Click with Wait</h3>
        <button class="demo-button" (dblclick)="handleDoubleClick('wait')" [class.clicked]="lastClicked === 'wait'">
          Double Click After Wait
        </button>
        <div class="code-snippet">
          <pre>
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("waitButton")));
Actions actions = new Actions(driver);
actions.doubleClick(element).perform();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 3: Double Click with JavaScript</h3>
        <button class="demo-button" (dblclick)="handleDoubleClick('js')" [class.clicked]="lastClicked === 'js'">
          JavaScript Double Click
        </button>
        <div class="code-snippet">
          <pre>
WebElement element = driver.findElement(By.id("jsButton"));
JavascriptExecutor executor = (JavascriptExecutor) driver;
String script = 
    "const evt = document.createEvent('MouseEvents');" +
    "evt.initEvent('dblclick', true, true);" +
    "arguments[0].dispatchEvent(evt);";
executor.executeScript(script, element);
          </pre>
        </div>
      </div>

      <div class="result-section" *ngIf="lastClicked">
        <h3>Last Action:</h3>
        <p>&#123;&#123;getClickDescription()&#125;&#125;</p>
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
export class DoubleClickComponent {
  lastClicked: string | null = null;

  handleDoubleClick(type: string): void {
    this.lastClicked = type;
  }

  getClickDescription(): string {
    switch (this.lastClicked) {
      case 'basic':
        return 'Basic double click performed using Actions class';
      case 'wait':
        return 'Double click with explicit wait performed';
      case 'js':
        return 'JavaScript double click performed';
      default:
        return '';
    }
  }
}
