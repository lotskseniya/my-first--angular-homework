import { Component, DoCheck, Input, OnDestroy } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-skills-counter',
  templateUrl: './skills-counter.component.html',
  styleUrls: ['./skills-counter.component.css'],
})
export class SkillsCounterComponent implements DoCheck, OnDestroy {
  @Input() inputData: string = '';
  @Input() givenFunction: (() => void) | null = null;
  
  name: string = 'Kseniya';
  value: string = '';
  searchValue: string = '';
  currentEditingIndex: number | null = null;
  todoEditngIndex: number = 0;
  editingValue: string = '';  
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

  deleteTodos(index: number) {
    this.currentEditingIndex = index;
    this.todos.splice(this.currentEditingIndex, 1);
    
    // if(this.searchValue){
    //   for (let item in this.todosSearchResults){
    //     this.todoEditngIndex = this.todosSearchResults[item].id
    //     this.todos.splice(this.todoEditngIndex, 1);
    //     this.todosSearchResults.splice(this.currentEditingIndex, 1);
    //   }
    // }
  }
}

