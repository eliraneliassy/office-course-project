import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Post} from "../post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  @Input() post: Post | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
