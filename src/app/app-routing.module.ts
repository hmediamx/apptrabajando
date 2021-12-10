import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterModule } from './modules/users/user-register/user-register.module';


const routes: Routes = [
	// ============ Trámites ===============
	{
		path: 'tramites-landing', 
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/tramites/tramites-landing/tramites-landing.module').then(m => m.TramitesLandingModule)
	},
	{
		path: 'tramites-lista/:id', 
		data: { depth: 3 }, 
		loadChildren: () => import('./modules/tramites/tramites-lista/tramites-lista.module').then(m => m.TramitesListaModule)
	},
	{
		path: 'tramite-view/:id/:from',
		data: { depth: 4 }, 
		loadChildren: () => import('./modules/tramites/tramite-view/tramite-view.module').then(m => m.TramiteViewModule)
	},
	{
		path: 'sesion-iniciar',
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/users/user-login/user-login.module').then(m => m.UserLoginModule)
	},
	{
		path: 'usuario-registrar',
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/users/user-register/user-register.module').then(m => UserRegisterModule)
	},
	{
		path: 'chats-list/:list/:type', 
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/chat/chats-list/chats-list.module').then(m => m.ChatsListModule)
	}, 
	{
		path: 'chat-view',
		// data: { depth: 2 }, 
		loadChildren: () => import('./modules/chat/chat-view/chat-view.module').then(m => m.ChatViewModule)
	},
	{
		path: 'form/:form',
		loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
	},
	{
		path: 'table/:table',
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/table/table.module').then(m => m.TableModule)
	},
	{
		path: 'table-item/:id/:method',
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/table-item/table-item.module').then(m => m.TableItemModule)
	},
	{
		path: 'users-registers',
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/users/table/table.module').then(m => m.TableModule)
	},
	{
		path: 'users-menus/:uid',
		loadChildren: () => import('./modules/users/menus/menus.module').then(m => m.MenusModule)
	},
	{
		path: 'media', 
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/media/media.module').then(m=>m.MediaModule)
	}, 
	{
		path: 'blog',
		data: { depth: 2 }, 
		loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
	},
	{
		path: '', 
		data: { depth: 1 }, 
		loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
	},
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
