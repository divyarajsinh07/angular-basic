import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
            <p> warning somthing is not right </p>
            `,

            styles:[
              `
                p {
                  padding 200px;
                  background-color:mistyrose;
                  border: 30px solide red;
                }
              `
            ]
})
export class WarningAlertComponent {


}
