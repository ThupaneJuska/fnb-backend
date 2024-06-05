// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX from './auth'; //_splitter_
//append_imports_end
export class reset_password {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'reset_password';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new reset_password(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_reset_password_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: reset_password');
    //appendnew_flow_reset_password_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: reset_password');

    this.app['put'](
      `${this.serviceBasePath}/reset-password`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_kFZUqNBs4xIRZrxj(bh, parentSpanInst);
          //appendnew_next_sd_YsCdQDFg5IFZwoZn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_YsCdQDFg5IFZwoZn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_reset_password_HttpIn
  }
  //   service flows_reset_password

  //appendnew_flow_reset_password_start

  async sd_kFZUqNBs4xIRZrxj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kFZUqNBs4xIRZrxj',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.newPassword = bh.input.body.newPassword;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pfLFrrHIWoFVUwXf(bh, parentSpanInst);
      //appendnew_next_sd_kFZUqNBs4xIRZrxj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kFZUqNBs4xIRZrxj',
        spanInst,
        'sd_kFZUqNBs4xIRZrxj'
      );
    }
  }

  async sd_pfLFrrHIWoFVUwXf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pfLFrrHIWoFVUwXf',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance: SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth =
        SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance.checkIfExist(
          spanInst,
          bh.searchObj
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qrNexXgx3HDHFFdH(bh, parentSpanInst);
      //appendnew_next_sd_pfLFrrHIWoFVUwXf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pfLFrrHIWoFVUwXf',
        spanInst,
        'sd_pfLFrrHIWoFVUwXf'
      );
    }
  }

  async sd_qrNexXgx3HDHFFdH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qrNexXgx3HDHFFdH',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Mzuc8dcrua2ZX4pf(bh, parentSpanInst);
      } else {
        bh = await this.sd_MyZhoKNk9mm7xuGi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qrNexXgx3HDHFFdH',
        spanInst,
        'sd_qrNexXgx3HDHFFdH'
      );
    }
  }

  async sd_Mzuc8dcrua2ZX4pf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mzuc8dcrua2ZX4pf',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.result = bh.result[0];
      console.log('Res', bh.result);
      bh.filter = { email: bh.input.body['email'] };
      bh.input.body = {
        ...bh.result[0],
      };
      const hashedPassword = await bcrypt.hash(bh.newPassword, 10);

      console.log('Hash pas', bh.input.body['password']);
      bh.body = { $set: bh.input.body };
      bh.input.body['password'] = hashedPassword;

      bh.payload = {
        to: bh.input.body.email,
        subject: 'Forgot Password',
        from: 'FNB',
        ptag: `<p>Your OTP is ${bh.input.body.OTP}</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QKmfHf5v1iAoJIMR(bh, parentSpanInst);
      //appendnew_next_sd_Mzuc8dcrua2ZX4pf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mzuc8dcrua2ZX4pf',
        spanInst,
        'sd_Mzuc8dcrua2ZX4pf'
      );
    }
  }

  async sd_QKmfHf5v1iAoJIMR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QKmfHf5v1iAoJIMR',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_ajFrSs3mQRYSN97Z',
        'users',
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RPndJY79VYCClCbL(bh, parentSpanInst);
      //appendnew_next_sd_QKmfHf5v1iAoJIMR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QKmfHf5v1iAoJIMR',
        spanInst,
        'sd_QKmfHf5v1iAoJIMR'
      );
    }
  }

  async sd_RPndJY79VYCClCbL(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RPndJY79VYCClCbL');
    }
  }

  async sd_MyZhoKNk9mm7xuGi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MyZhoKNk9mm7xuGi',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User dont exist',
      };

      console.log('user dnt exist');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RPndJY79VYCClCbL(bh, parentSpanInst);
      //appendnew_next_sd_MyZhoKNk9mm7xuGi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MyZhoKNk9mm7xuGi',
        spanInst,
        'sd_MyZhoKNk9mm7xuGi'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_reset_password_Catch
}
