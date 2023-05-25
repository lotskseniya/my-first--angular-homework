import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-skills-counter',
  templateUrl: './skills-counter.component.html',
  styleUrls: ['./skills-counter.component.css'],
})
export class SkillsCounterComponent implements OnInit, DoCheck, OnDestroy {
  @Input() inputData: string = '';
  @Input() baseData: number[] = [];
  @Input() givenFunction: (() => void) | null = null;

  name: string = 'Kseniya';
  counter: number = 0;

  value: string = '';
  searchValue: string = '';
  currentEditingIndex: number | null = null;
  editingValue: string = '';
  skills: string[] = ['JavaScript', 'HTML', 'CSS', 'Angular'];

  todos: { completed: boolean; id: number; title: string; userId: number }[] =
    [];
  todosSearchResults: typeof this.todos = [];

  ngOnInit() {
    this.givenFunction && this.givenFunction();

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;

        const localStorageSearchValue =
          localStorage.getItem('searchValue') || '';
        this.searchValue = localStorageSearchValue;

        this.filterTodos();
      });
  }

  ngDoCheck() {
    console.log('Data has been updated');
  }

  ngOnDestroy() {
    console.log('Component is preparing for destroying');
  }

  onSearchInputChange(event: any) {
    this.searchValue = event.target.value;
    localStorage.setItem('searchValue', this.searchValue);
    this.filterTodos();
  }

  filterTodos() {
    this.todosSearchResults = this.todos.filter(({ title }) =>
      title.includes(this.searchValue)
    );
  }

  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 1;
  }

  addSkill(skill: string) {
    this.skills.push(skill);
    this.value = '';
  }

  deleteSkill(index: number) {
    this.currentEditingIndex = index;
    if (this.currentEditingIndex >= 0) {
      this.skills.splice(this.currentEditingIndex, 1);
      this.currentEditingIndex = null;
      return;
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

