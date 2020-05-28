import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { PhotoList } from './photo-list/photo-list.resolver/photo-list.resolver.component';

@NgModule({
    declarations:[  PhotoComponent, 
                    PhotoListComponent, 
                    PhotoFormComponent, 
                    PhotosComponent, 
                    FilterByDescriptionPipe, PhotoList.ResolverComponent
                ],
    imports:[   HttpClientModule, 
                CommonModule
            ],
    exports: []
})
export class PhotosModule{}