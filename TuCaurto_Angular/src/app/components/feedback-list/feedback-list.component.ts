import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {FeedbackService} from "../../service/feedback.service";
import {Observable} from "rxjs";
import {Feedback} from "../../common/Feedback";
import Swal from "sweetalert2";
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedback: Feedback[];
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbacks();

  }
  getFeedbacks()
  {
    this.feedbackService.getFeedback().subscribe((data)=>{
      this.feedback=data;
    });
  }
  deleteFeedback(id: number)
  {
    this.feedbackService.deleteFeedback(id).subscribe((data)=>{
      console.log(data);
      Swal.fire("Success","Successfully Resolved","success");
      this.ngOnInit();
    });
  }


}
