import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AudioComponent } from './components/audio/audio.component';
import { AddAudioComponent } from './components/add-audio/add-audio.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{ path: 'users', component:UsersComponent, loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },
{path:'/audio',component:AudioComponent},
{path:'/add-audio',component:AddAudioComponent},
{path:'/audio-player',component:AudioPlayerComponent},
{path:'/login',component:LoginComponent},
{path:'/register',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
