import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

function textValidator(): ValidatorFn{
  return (control: AbstractControl) =>{

    const hasUpperCase = /[A-Z]/.test(control.value)
    const hasNumber = /[0-9]/.test(control.value)
    if(hasUpperCase && hasNumber){
      return null;
    }
    return {invalidText: true} ;
  };
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

    /*Formas de fazer 
    constructor(
      private _fb: FormBuilder
    ){}*/

    #fb = inject(FormBuilder)


  public profileForm = this.#fb.group({
    name: ['', [Validators.required , textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      banco: ['Sql Server']
    }),
    myFavFoods: this.#fb.array([['X-tudo']]),

  });

  public update(){
    this.profileForm.patchValue({
      name: "Maria",
      myStacks: {
        front: 'vue',
        banco: 'Oracle'
      }
    })
  }

  public addMyFavFood(newFood: string){
    const myFavFoods = this.profileForm.get('myFavFoods') as FormArray;
    const addNewFood = new FormControl(newFood) ;

    myFavFoods.push(addNewFood);
  }

  public submit(){
    if(this.profileForm.valid){
      console.log(this.profileForm.valid);
      
    }
  }
}
