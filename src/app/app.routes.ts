import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [

    // It is the default Route for the Appplication (Just like Home)
    {
        path:"",
        redirectTo:'databinding',
        pathMatch:'full'
    },

    {
        path:"databinding",
        component:DataBinding
    },
    { 
        path:"signal",
        component: Signal
    },
    {
        path:"variables",
        component:Variables
    },

    //WildCard Route  - It should be at the End only
    {
        path:"**",
        component:NotFound
    }

    //
];
