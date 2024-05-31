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
export class notification {
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
    this.serviceName = 'notification';
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
      instance = new notification(
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
    //appendnew_flow_notification_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: notification');
    //appendnew_flow_notification_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: notification');

    this.app['get'](
      `${this.serviceBasePath}/get-notifications`,
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
          bh = await this.sd_K8tgN0SLaE0NcwOG(bh, parentSpanInst);
          //appendnew_next_sd_qxq9Zyaa6pSsvkec
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qxq9Zyaa6pSsvkec');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete-notification`,
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
          bh = await this.sd_aSB2nPVEVKsWLCWE(bh, parentSpanInst);
          //appendnew_next_sd_mcZlWCDHgcol9p0Y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mcZlWCDHgcol9p0Y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_notification_HttpIn
  }
  //   service flows_notification

  //appendnew_flow_notification_start

  async sd_K8tgN0SLaE0NcwOG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K8tgN0SLaE0NcwOG',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'notifications',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FmQ9oc2otlsLHXfi(bh, parentSpanInst);
      //appendnew_next_sd_K8tgN0SLaE0NcwOG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K8tgN0SLaE0NcwOG',
        spanInst,
        'sd_K8tgN0SLaE0NcwOG'
      );
    }
  }

  async sd_FmQ9oc2otlsLHXfi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FmQ9oc2otlsLHXfi',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance: SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth =
        SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPX.auth.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rnBmVBMNMAATcuPXInstance.checkIfExist(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9HtAoMUMQYkWVF7n(bh, parentSpanInst);
      //appendnew_next_sd_FmQ9oc2otlsLHXfi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FmQ9oc2otlsLHXfi',
        spanInst,
        'sd_FmQ9oc2otlsLHXfi'
      );
    }
  }

  async sd_9HtAoMUMQYkWVF7n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9HtAoMUMQYkWVF7n',
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
        bh = await this.sd_Qi3eMaOaDCPdvMYF(bh, parentSpanInst);
      } else {
        bh = await this.sd_KfZ1zxe6GNFcGARu(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9HtAoMUMQYkWVF7n',
        spanInst,
        'sd_9HtAoMUMQYkWVF7n'
      );
    }
  }

  async sd_Qi3eMaOaDCPdvMYF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qi3eMaOaDCPdvMYF',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EmoYXZTpdaLuIpZe(bh, parentSpanInst);
      //appendnew_next_sd_Qi3eMaOaDCPdvMYF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qi3eMaOaDCPdvMYF',
        spanInst,
        'sd_Qi3eMaOaDCPdvMYF'
      );
    }
  }

  async sd_EmoYXZTpdaLuIpZe(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EmoYXZTpdaLuIpZe');
    }
  }

  async sd_KfZ1zxe6GNFcGARu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KfZ1zxe6GNFcGARu',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_EmoYXZTpdaLuIpZe(bh, parentSpanInst);
      //appendnew_next_sd_KfZ1zxe6GNFcGARu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KfZ1zxe6GNFcGARu',
        spanInst,
        'sd_KfZ1zxe6GNFcGARu'
      );
    }
  }

  async sd_aSB2nPVEVKsWLCWE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aSB2nPVEVKsWLCWE',
      parentSpanInst
    );
    try {
      bh.filter = { email: bh.input.body['email'] };
      console.log('Deleted collection', delete bh.input.body.collection);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3RtFgoozdVD0SldG(bh, parentSpanInst);
      //appendnew_next_sd_aSB2nPVEVKsWLCWE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aSB2nPVEVKsWLCWE',
        spanInst,
        'sd_aSB2nPVEVKsWLCWE'
      );
    }
  }

  async sd_3RtFgoozdVD0SldG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3RtFgoozdVD0SldG',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().deleteOne(
        'sd_ajFrSs3mQRYSN97Z',
        'notifications',
        bh.filter,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_JBmMrsfcBQsfkqW4(bh, parentSpanInst);
      //appendnew_next_sd_3RtFgoozdVD0SldG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3RtFgoozdVD0SldG',
        spanInst,
        'sd_3RtFgoozdVD0SldG'
      );
    }
  }

  async sd_JBmMrsfcBQsfkqW4(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JBmMrsfcBQsfkqW4');
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
  //appendnew_flow_notification_Catch
}
