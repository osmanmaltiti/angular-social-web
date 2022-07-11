import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CreatePostService } from './../../services/create-post.service';

@Component({
  selector: 'app-postbox',
  templateUrl: './postbox.component.html',
  styleUrls: ['./postbox.component.css'],
})
export class PostboxComponent implements OnInit {
  @Output('oncreatepost') oncreatepost: EventEmitter<any> = new EventEmitter();
  @Output('clickoutside') clickOutside: EventEmitter<any> = new EventEmitter();
  @ViewChild('outsidepostbox') outsidepostbox: ElementRef | undefined;
  @Input('setOpen') setOpen: boolean = false;

  post: File | string = '';
  postTypeIsImage: boolean = false;

  constructor(private createPostService: CreatePostService) {}

  ngOnInit(): void {}

  createPost() {
    this.createPostService.onCreatePost(this.post).subscribe({
      next: () => this.oncreatepost.emit(),
      error: ({ error }) => console.log(error),
    });
  }

  onChange(event: any) {
    this.post = event.target.files[0];
  }

  onClickOutside(event: Event) {
    if (<HTMLElement>event.target === this.outsidepostbox?.nativeElement) {
      this.setOpen = false;
      this.clickOutside.emit();
    }
  }

  onTogglePostType() {
    this.postTypeIsImage = !this.postTypeIsImage;
  }
}
