import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FeedbackService} from "../../service/feedback.service";
import {Feedback} from "../../common/Feedback";
import Swal from "sweetalert2";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit
{

  feedback: Feedback= new Feedback();
  constructor(private feedbackService: FeedbackService,
              private router: Router) { }

  ngOnInit(): void {
  }

  collectFeedback()
  {
    this.feedbackService.submitFeedback(this.feedback).subscribe(data=>{
      console.log(data);
      Swal.fire("Success","Feedback has been recorder! Thanks for contacting us.","success")
      this.feedback=new Feedback();
    })
  }

}
