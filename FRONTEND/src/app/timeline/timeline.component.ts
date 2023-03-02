import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input()
  begin!: Date

  @Input()
  end!: Date

  @Output()
  changed: EventEmitter<Date> = new EventEmitter<Date>()

  value: number = Date.now()
  date: string = ""

  ngOnInit(): void {
    this.date = (this.begin).toISOString().split('T')[0]
    this.value = this.begin.getTime()
    this.changed.emit(new Date(this.date))
  }

  change() {
    let date = (new Date(this.value))
    this.date = date.toISOString().split('T')[0]
    this.changed.emit(date)
  }
  change2(){
    let date = (new Date(this.date))
    this.value = date.getTime()
    this.changed.emit(date)
  }

}
