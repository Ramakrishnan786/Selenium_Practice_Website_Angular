import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-click',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="click-demo">
      <h2>Single Click Demo</h2>
      <div class="demo-section">
        <h3>Example 1: Basic Click</h3>
        <button class="demo-button" (click)="handleClick('basic')" [class.clicked]="lastClicked === 'basic'">
          Click Me
        </button>
        <div class="code-snippet">
          <pre>
driver.findElement(By.id("clickButton")).click();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 2: Click with Wait</h3>
        <button class="demo-button" (click)="handleClick('wait')" [class.clicked]="lastClicked === 'wait'">
          Click After Wait
        </button>
        <div class="code-snippet">
          <pre>
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("waitButton")));
element.click();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 3: Click with JavaScript</h3>
        <button class="demo-button" (click)="handleClick('js')" [class.clicked]="lastClicked === 'js'">
          JavaScript Click
        </button>
        <div class="code-snippet">
          <pre>
WebElement element = driver.findElement(By.id("jsButton"));
JavascriptExecutor executor = (JavascriptExecutor) driver;
executor.executeScript("arguments[0].click();", element);
          </pre>
        </div>
      </div>

      <div class="result-section" *ngIf="lastClicked">
        <h3>Last Action:</h3>
        <p>Button clicked: {{ getClickDescription() }}</p>
      </div>
    </div>
  `,
  styles: [`
    .click-demo {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;

      h2 {
        color: #2c3e50;
        margin-bottom: 30px;
        text-align: center;
      }
    }

    .demo-section {
      background: white;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      h3 {
        color: #00AC55;
        margin-bottom: 15px;
      }
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

      &:hover {
        background-color: darken(#00AC55, 5%);
        transform: translateY(-2px);
      }

      &.clicked {
        animation: clickEffect 0.3s ease;
      }
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

      pre {
        margin: 0;
        color: #2c3e50;
        font-family: 'Courier New', Courier, monospace;
        font-size: 14px;
      }
    }

    .result-section {
      background: #e8f5e9;
      border-radius: 8px;
      padding: 15px;
      margin-top: 20px;

      h3 {
        color: #00AC55;
        margin-bottom: 10px;
      }

      p {
        color: #2c3e50;
        margin: 0;
      }
    }
  `]
})
export class SingleClickComponent {
  lastClicked: string | null = null;

  handleClick(type: string): void {
    this.lastClicked = type;
  }

  getClickDescription(): string {
    switch (this.lastClicked) {
      case 'basic':
        return 'Basic click performed';
      case 'wait':
        return 'Click with explicit wait performed';
      case 'js':
        return 'JavaScript click performed';
      default:
        return '';
    }
  }
}
