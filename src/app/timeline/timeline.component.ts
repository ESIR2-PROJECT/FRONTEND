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

  }

  change() {
    let date = (new Date(this.value))
    this.date = date.toISOString().split('T')[0]
    this.print();
    this.changed.emit(date)
  }
  change2(){
    let date = (new Date(this.date))
    this.value = date.getTime()
    this.print();
    this.changed.emit(date)
  }

  print(){
    console.log(this.date)
  }

}
