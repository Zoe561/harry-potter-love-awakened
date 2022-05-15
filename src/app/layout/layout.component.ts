import { Component, HostListener, OnInit } from '@angular/core';
import { DEVICE } from '../core/const/device.const';
import { SharedService } from '../share/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  /**
   * 是否已切換為 pad 以上的尺寸
   */
  isPad = true;
  /**
   * 裝置
   */
  get DEVICE(): typeof DEVICE { return DEVICE; }
  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.initUserDevice(document.documentElement.clientWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const size = document.documentElement.clientWidth;
    this.detectScreenSize(size);
  }

  private initUserDevice(size: number) {
    // 網頁版
    if (size >= 1024) {
      this.sharedService.setUserDeviceSubject = DEVICE.PAD;
      // 手機版
    } else if (size > 0 && size < 1024) {
      this.sharedService.setUserDeviceSubject = DEVICE.MOBILE;
    }
  }

  private detectScreenSize(size: number) {
    // 網頁版
    if (size >= 1024) {
      if (!this.isPad) {
        this.sharedService.setUserDeviceSubject = DEVICE.PAD;
        this.isPad = true;
      }
      // 手機版
    } else if (size > 0 && size < 1024) {
      if (this.isPad) {
        this.sharedService.setUserDeviceSubject = DEVICE.MOBILE;
        this.isPad = false;
      }
    }
  }
}
