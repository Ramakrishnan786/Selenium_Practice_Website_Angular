import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="drag-drop-demo">
      <h2>Drag and Drop Demo</h2>
      
      <div class="demo-section">
        <h3>Example 1: Basic Drag and Drop</h3>
        <div class="drag-drop-container">
          <div class="drag-source" 
               draggable="true" 
               (dragstart)="onDragStart($event, 'basic')"
               [class.dragging]="isDragging === 'basic'">
            Drag me
          </div>
          <div class="drop-target" 
               (dragover)="onDragOver($event)" 
               (drop)="onDrop($event, 'basic')"
               [class.active]="isDropTarget === 'basic'">
            Drop here
          </div>
        </div>
        <div class="code-snippet">
          <pre>
// Basic drag and drop using Actions
Actions actions = new Actions(driver);
WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));
actions.dragAndDrop(source, target).perform();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 2: Drag and Drop with Offset</h3>
        <div class="drag-drop-container">
          <div class="drag-source" 
               draggable="true" 
               (dragstart)="onDragStart($event, 'offset')"
               [class.dragging]="isDragging === 'offset'">
            Drag with offset
          </div>
          <div class="drop-target large-target" 
               (dragover)="onDragOver($event)" 
               (drop)="onDrop($event, 'offset')"
               [class.active]="isDropTarget === 'offset'">
            Drop anywhere here
          </div>
        </div>
        <div class="code-snippet">
          <pre>
// Drag and drop with specific offset
Actions actions = new Actions(driver);
WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));

// Get the target element's location
Point targetLocation = target.getLocation();
Dimension targetSize = target.getSize();

// Calculate the offset (e.g., drop in the center)
int xOffset = targetLocation.getX() + targetSize.getWidth() / 2;
int yOffset = targetLocation.getY() + targetSize.getHeight() / 2;

actions.clickAndHold(source)
       .moveByOffset(xOffset, yOffset)
       .release()
       .perform();
          </pre>
        </div>
      </div>

      <div class="demo-section">
        <h3>Example 3: Drag and Drop with JavaScript</h3>
        <div class="drag-drop-container">
          <div class="drag-source" 
               draggable="true" 
               (dragstart)="onDragStart($event, 'js')"
               [class.dragging]="isDragging === 'js'">
            JS Drag
          </div>
          <div class="drop-target" 
               (dragover)="onDragOver($event)" 
               (drop)="onDrop($event, 'js')"
               [class.active]="isDropTarget === 'js'">
            JS Drop
          </div>
        </div>
        <div class="code-snippet">
          <pre>
// JavaScript-based drag and drop
WebElement source = driver.findElement(By.id("draggable"));
WebElement target = driver.findElement(By.id("droppable"));

String script = 
    "function simulateDragDrop(sourceElem, targetElem) &#123;" +
    "  const dragStart = document.createEvent('Event');" +
    "  dragStart.initEvent('dragstart', true, true);" +
    "  sourceElem.dispatchEvent(dragStart);" +
    "  const drop = document.createEvent('Event');" +
    "  drop.initEvent('drop', true, true);" +
    "  targetElem.dispatchEvent(drop);" +
    "  const dragEnd = document.createEvent('Event');" +
    "  dragEnd.initEvent('dragend', true, true);" +
    "  sourceElem.dispatchEvent(dragEnd);" +
    "&#125;" +
    "simulateDragDrop(arguments[0], arguments[1]);";
executor.executeScript(script, source, target);
          </pre>
        </div>
      </div>

      <div class="result-section" *ngIf="lastAction">
        <h3>Last Action:</h3>
        <p>&#123;&#123;getActionDescription()&#125;&#125;</p>
      </div>
    </div>
  `,
  styles: [`
    .drag-drop-demo {
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

    .drag-drop-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 20px 0;
      min-height: 150px;
    }

    .drag-source {
      background-color: #00AC55;
      color: white;
      padding: 15px 25px;
      border-radius: 4px;
      cursor: move;
      transition: all 0.3s ease;
      user-select: none;
    }

    .drag-source.dragging {
      opacity: 0.5;
      transform: scale(0.95);
    }

    .drag-source:hover {
      transform: translateY(-2px);
    }

    .drop-target {
      border: 2px dashed #00AC55;
      padding: 20px;
      border-radius: 4px;
      min-width: 150px;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      color: #666;
    }

    .drop-target.active {
      background-color: rgba(0, 172, 85, 0.1);
      border-style: solid;
    }

    .drop-target.large-target {
      min-width: 200px;
      min-height: 100px;
    }

    .code-snippet {
      background: #f8f9fa;
      border-radius: 4px;
      padding: 15px;
      margin-top: 20px;
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
export class DragDropComponent {
  isDragging: string | null = null;
  isDropTarget: string | null = null;
  lastAction: string | null = null;

  onDragStart(event: DragEvent, type: string): void {
    this.isDragging = type;
    if (event.dataTransfer) {
      event.dataTransfer.setData('text', type);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetType: string): void {
    event.preventDefault();
    if (event.dataTransfer) {
      const sourceType = event.dataTransfer.getData('text');
      if (sourceType === targetType) {
        this.lastAction = targetType;
      }
    }
    this.isDragging = null;
    this.isDropTarget = null;
  }

  getActionDescription(): string {
    switch (this.lastAction) {
      case 'basic':
        return 'Basic drag and drop performed using Actions class';
      case 'offset':
        return 'Drag and drop with offset performed';
      case 'js':
        return 'JavaScript-based drag and drop performed';
      default:
        return '';
    }
  }
}
