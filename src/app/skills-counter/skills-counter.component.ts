import { Component, DoCheck, Input, OnDestroy } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-skills-counter',
  templateUrl: './skills-counter.component.html',
  styleUrls: ['./skills-counter.component.css'],
})
export class SkillsCounterComponent implements DoCheck, OnDestroy {
  @Input() inputData: string = '';
  
  name: string = 'Kseniya';
  value: string = '';
  searchValue: string = '';
  currentEditingIndex: number | null = null;
  editingValue: string = '';
  skills: string[] = ['JavaScript', 'HTML', 'CSS', 'Angular'];
  counter: number = this.skills.length;


  ngDoCheck() {
    console.log('Data has been updated');
  }

  ngOnDestroy() {
    console.log('Component is preparing for destroying');
  }

  countSkills() {
    this.counter = this.skills.length;
  }

  addSkill(skill: string) {
    this.skills.push(skill);
    this.value = '';
    this.countSkills();
  }

  deleteSkill(index: number) {
    this.currentEditingIndex = index;
    if (this.currentEditingIndex >= 0) {
      this.skills.splice(this.currentEditingIndex, 1);
      this.currentEditingIndex = null;
      this.countSkills();
    }
  }

  editSkill(index: number) {
    this.currentEditingIndex = index;
  }

  onInputChange(event: any) {
    this.value = event.target.value;
  }

  onEditInputChange(event: any) {
    this.editingValue = event.target.value;
  }

  onSaveEdit() {
    if (this.editingValue) {
      this.skills[this.currentEditingIndex!] = this.editingValue;
    }
    this.currentEditingIndex = null;
    this.editingValue = '';
  }
}

