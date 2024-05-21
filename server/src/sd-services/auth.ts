// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { FileInService } from '../utils/ndefault-file/FileIn/FileInService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class auth {
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
    this.serviceName = 'auth';
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
      instance = new auth(
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
    //appendnew_flow_auth_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: auth');
    //appendnew_flow_auth_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: auth');

    this.app['post'](
      `${this.serviceBasePath}/register`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'name', maxCount: 1 }],
      }),

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
          bh = await this.sd_kbZcqnQSg2r55SGk(bh, parentSpanInst);
          //appendnew_next_sd_wsqWGWcesvGtnqo1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wsqWGWcesvGtnqo1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update`,
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
          bh = await this.sd_IL3KQ2cnN00XR8n9(bh, parentSpanInst);
          //appendnew_next_sd_TcdKzKCe4pwlGvG4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TcdKzKCe4pwlGvG4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/change-pin`,
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
          bh = await this.sd_rKG5lRCp2ITAXhYw(bh, parentSpanInst);
          //appendnew_next_sd_2OxHeemcYUIw69YO
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2OxHeemcYUIw69YO');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-file`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'name', maxCount: 1 }],
      }),

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
          bh = await this.sd_EMU76JKUwLutq0jK(bh, parentSpanInst);
          //appendnew_next_sd_xGYn1ynauI79omOt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xGYn1ynauI79omOt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-file`,
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
          bh = await this.sd_8OtQUxpu1OTSklDD(bh, parentSpanInst);
          //appendnew_next_sd_0dKFiCNy4qmxYTjl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0dKFiCNy4qmxYTjl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-admin`,
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
          bh = await this.sd_xF1aHbFU23VFIy91(bh, parentSpanInst);
          //appendnew_next_sd_kB85xAHf72lebzvN
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kB85xAHf72lebzvN');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download-file`,
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
          bh = await this.sd_XuI5ang6rLg5end7(bh, parentSpanInst);
          //appendnew_next_sd_HUS6bPgtry4Z9I23
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HUS6bPgtry4Z9I23');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verification`,
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
          bh = await this.sd_cNdl8vgocns6VGYF(bh, parentSpanInst);
          //appendnew_next_sd_9Kx1Odisa7wjtoFP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9Kx1Odisa7wjtoFP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete`,
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
          bh = await this.sd_uq4lLunC71aFlNkj(bh, parentSpanInst);
          //appendnew_next_sd_hJdVW1jU3bQAeK05
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hJdVW1jU3bQAeK05');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_auth_HttpIn
  }
  //   service flows_auth

  async checkIfExist(parentSpanInst, searchObj: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'checkIfExist',
      parentSpanInst
    );
    let bh: any = {
      input: {
        searchObj,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_o8c0l4D11uvNKdIC(bh, parentSpanInst);
      //appendnew_next_checkIfExist
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ygLudNMItp9Xqotm',
        spanInst,
        'checkIfExist'
      );
    }
  }
  //appendnew_flow_auth_start

  async sd_kbZcqnQSg2r55SGk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kbZcqnQSg2r55SGk',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      // This is the fix, when adding documents to the DB
      // Add your own _id as a type of 'number'
      // The issue is that the _id that MongoDB provides is an Object SO we couldn't find it
      bh.input.body['_id'] = new Date().getTime();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_U1NLypdAJKVQskul(bh, parentSpanInst);
      //appendnew_next_sd_kbZcqnQSg2r55SGk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kbZcqnQSg2r55SGk',
        spanInst,
        'sd_kbZcqnQSg2r55SGk'
      );
    }
  }

  async sd_U1NLypdAJKVQskul(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U1NLypdAJKVQskul',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B82AggI2BXaoFCwk(bh, parentSpanInst);
      //appendnew_next_sd_U1NLypdAJKVQskul
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U1NLypdAJKVQskul',
        spanInst,
        'sd_U1NLypdAJKVQskul'
      );
    }
  }

  async sd_B82AggI2BXaoFCwk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B82AggI2BXaoFCwk',
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
        bh = await this.ifError(bh, parentSpanInst);
      } else {
        bh = await this.ifSuccess(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B82AggI2BXaoFCwk',
        spanInst,
        'sd_B82AggI2BXaoFCwk'
      );
    }
  }

  async ifError(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifError', parentSpanInst);
    try {
      bh.status = 404;
      bh.result = {
        message: 'User already exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TVW1YChwcueLIbBM(bh, parentSpanInst);
      //appendnew_next_ifError
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8byiLnVAIJwBOtbq',
        spanInst,
        'ifError'
      );
    }
  }

  async sd_TVW1YChwcueLIbBM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TVW1YChwcueLIbBM');
    }
  }

  async ifSuccess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifSuccess', parentSpanInst);
    try {
      bh.status = 200;
      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      bh.body = bh.input.body;
      bh.input.body['Status'] = 'Pending';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tWvi321XyzGdzHq1(bh, parentSpanInst);
      //appendnew_next_ifSuccess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6PE1R3GN0PWCtVVj',
        spanInst,
        'ifSuccess'
      );
    }
  }

  async sd_tWvi321XyzGdzHq1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tWvi321XyzGdzHq1',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendEmail(bh, parentSpanInst);
      //appendnew_next_sd_tWvi321XyzGdzHq1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tWvi321XyzGdzHq1',
        spanInst,
        'sd_tWvi321XyzGdzHq1'
      );
    }
  }

  async sendEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'FNB ACCOUNT',
        from: 'FNB',
        ptag: `<p>Your Account has been created successfully</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3H8LefEtmRLAuSHY(bh, parentSpanInst);
      //appendnew_next_sendEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IqRDFPTyLhPvUIrA',
        spanInst,
        'sendEmail'
      );
    }
  }

  async sd_3H8LefEtmRLAuSHY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3H8LefEtmRLAuSHY',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_Y7tj22emRRoCDJdJ'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.ptag,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TVW1YChwcueLIbBM(bh, parentSpanInst);
      //appendnew_next_sd_3H8LefEtmRLAuSHY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3H8LefEtmRLAuSHY',
        spanInst,
        'sd_3H8LefEtmRLAuSHY'
      );
    }
  }

  async sd_o8c0l4D11uvNKdIC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_o8c0l4D11uvNKdIC',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        bh.input.searchObj.collection,
        bh.input.searchObj.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_o8c0l4D11uvNKdIC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o8c0l4D11uvNKdIC',
        spanInst,
        'sd_o8c0l4D11uvNKdIC'
      );
    }
  }

  async sd_IL3KQ2cnN00XR8n9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IL3KQ2cnN00XR8n9',
      parentSpanInst
    );
    try {
      bh.collection = bh.input.body.collection;
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;
      // delete bh.input.body['_id']; // Need to remove _id if you update

      bh.body = { $set: bh.input.body };

      console.log('Body data', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_svfviycgAG6f0RrV(bh, parentSpanInst);
      //appendnew_next_sd_IL3KQ2cnN00XR8n9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IL3KQ2cnN00XR8n9',
        spanInst,
        'sd_IL3KQ2cnN00XR8n9'
      );
    }
  }

  async sd_svfviycgAG6f0RrV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_svfviycgAG6f0RrV',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_ajFrSs3mQRYSN97Z',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dD5nqIqhtJxOErYt(bh, parentSpanInst);
      //appendnew_next_sd_svfviycgAG6f0RrV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_svfviycgAG6f0RrV',
        spanInst,
        'sd_svfviycgAG6f0RrV'
      );
    }
  }

  async sd_dD5nqIqhtJxOErYt(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dD5nqIqhtJxOErYt');
    }
  }

  async sd_rKG5lRCp2ITAXhYw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rKG5lRCp2ITAXhYw',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.newPin = bh.input.body.newPin;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XTxgR0qggk8CZ4qE(bh, parentSpanInst);
      //appendnew_next_sd_rKG5lRCp2ITAXhYw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rKG5lRCp2ITAXhYw',
        spanInst,
        'sd_rKG5lRCp2ITAXhYw'
      );
    }
  }

  async sd_XTxgR0qggk8CZ4qE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XTxgR0qggk8CZ4qE',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.searchObj);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6TCqEOW9tD5meQfQ(bh, parentSpanInst);
      //appendnew_next_sd_XTxgR0qggk8CZ4qE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XTxgR0qggk8CZ4qE',
        spanInst,
        'sd_XTxgR0qggk8CZ4qE'
      );
    }
  }

  async sd_6TCqEOW9tD5meQfQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6TCqEOW9tD5meQfQ',
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
        bh = await this.sd_3OToUlvlcTQS42SH(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6TCqEOW9tD5meQfQ',
        spanInst,
        'sd_6TCqEOW9tD5meQfQ'
      );
    }
  }

  async sd_3OToUlvlcTQS42SH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3OToUlvlcTQS42SH',
      parentSpanInst
    );
    try {
      const newPin = bh.input.body.newPin;

      bh.input.body = {
        ...bh.result[0],
        collection: bh.searchObj.collection,
      };

      bh.input.body.pin = newPin;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IL3KQ2cnN00XR8n9(bh, parentSpanInst);
      //appendnew_next_sd_3OToUlvlcTQS42SH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3OToUlvlcTQS42SH',
        spanInst,
        'sd_3OToUlvlcTQS42SH'
      );
    }
  }

  async sd_EMU76JKUwLutq0jK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EMU76JKUwLutq0jK',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.name[0];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GEVkvcNdT5a5Ov1J(bh, parentSpanInst);
      //appendnew_next_sd_EMU76JKUwLutq0jK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EMU76JKUwLutq0jK',
        spanInst,
        'sd_EMU76JKUwLutq0jK'
      );
    }
  }

  async sd_GEVkvcNdT5a5Ov1J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GEVkvcNdT5a5Ov1J',
      parentSpanInst
    );
    try {
      let fileInServiceInstance = FileInService.getInstance();
      bh.data = await fileInServiceInstance.fileIn({
        filepath: bh.file.path,
        format: 'buffer',
        encoding: 'utf8',
      });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BHduQ5xAyOncXmta(bh, parentSpanInst);
      //appendnew_next_sd_GEVkvcNdT5a5Ov1J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GEVkvcNdT5a5Ov1J',
        spanInst,
        'sd_GEVkvcNdT5a5Ov1J'
      );
    }
  }

  async sd_BHduQ5xAyOncXmta(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BHduQ5xAyOncXmta',
      parentSpanInst
    );
    try {
      bh.data = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'files',
        bh.file,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BkTEbjv46m5Enup2(bh, parentSpanInst);
      //appendnew_next_sd_BHduQ5xAyOncXmta
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BHduQ5xAyOncXmta',
        spanInst,
        'sd_BHduQ5xAyOncXmta'
      );
    }
  }

  async sd_BkTEbjv46m5Enup2(bh, parentSpanInst) {
    try {
      const readable = new Readable();
      readable._read = () => {}; // _read is required but you can noop it
      // setting buffer
      readable.push(bh.data);
      readable.push(null);
      // setting status
      bh.web.res.status(200);
      readable.pipe(bh.web.res);
      bh.readable = readable;
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BkTEbjv46m5Enup2');
    }
  }

  async sd_8OtQUxpu1OTSklDD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8OtQUxpu1OTSklDD',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'files',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_e1Ymjrhgyrpk8hRF(bh, parentSpanInst);
      //appendnew_next_sd_8OtQUxpu1OTSklDD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8OtQUxpu1OTSklDD',
        spanInst,
        'sd_8OtQUxpu1OTSklDD'
      );
    }
  }

  async sd_e1Ymjrhgyrpk8hRF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_e1Ymjrhgyrpk8hRF',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_W9w3XGf65Eze3qAj(bh, parentSpanInst);
      //appendnew_next_sd_e1Ymjrhgyrpk8hRF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_e1Ymjrhgyrpk8hRF',
        spanInst,
        'sd_e1Ymjrhgyrpk8hRF'
      );
    }
  }

  async sd_W9w3XGf65Eze3qAj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W9w3XGf65Eze3qAj',
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
        bh = await this.sd_vBAwvG2qumjZdQ5W(bh, parentSpanInst);
      } else {
        bh = await this.sd_XTWlScMZ55pmxoDw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W9w3XGf65Eze3qAj',
        spanInst,
        'sd_W9w3XGf65Eze3qAj'
      );
    }
  }

  async sd_vBAwvG2qumjZdQ5W(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vBAwvG2qumjZdQ5W',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KTvbicfFqK0dgmQg(bh, parentSpanInst);
      //appendnew_next_sd_vBAwvG2qumjZdQ5W
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vBAwvG2qumjZdQ5W',
        spanInst,
        'sd_vBAwvG2qumjZdQ5W'
      );
    }
  }

  async sd_KTvbicfFqK0dgmQg(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KTvbicfFqK0dgmQg');
    }
  }

  async sd_XTWlScMZ55pmxoDw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XTWlScMZ55pmxoDw',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_KTvbicfFqK0dgmQg(bh, parentSpanInst);
      //appendnew_next_sd_XTWlScMZ55pmxoDw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XTWlScMZ55pmxoDw',
        spanInst,
        'sd_XTWlScMZ55pmxoDw'
      );
    }
  }

  async sd_xF1aHbFU23VFIy91(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xF1aHbFU23VFIy91',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'Admins',
      };

      bh.input.body['_id'] = new Date().getTime();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_thV4LW24bpgzXF0x(bh, parentSpanInst);
      //appendnew_next_sd_xF1aHbFU23VFIy91
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xF1aHbFU23VFIy91',
        spanInst,
        'sd_xF1aHbFU23VFIy91'
      );
    }
  }

  async sd_thV4LW24bpgzXF0x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_thV4LW24bpgzXF0x',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gvbiF9TsaJic257A(bh, parentSpanInst);
      //appendnew_next_sd_thV4LW24bpgzXF0x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_thV4LW24bpgzXF0x',
        spanInst,
        'sd_thV4LW24bpgzXF0x'
      );
    }
  }

  async sd_gvbiF9TsaJic257A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gvbiF9TsaJic257A',
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
        bh = await this.ifFound(bh, parentSpanInst);
      } else {
        bh = await this.ifSucceess(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gvbiF9TsaJic257A',
        spanInst,
        'sd_gvbiF9TsaJic257A'
      );
    }
  }

  async ifFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifFound', parentSpanInst);
    try {
      bh.status = 404;
      bh.result = {
        message: 'Admin Already Exist!!!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c6LZxfceffqnduax(bh, parentSpanInst);
      //appendnew_next_ifFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B7rcag9FpwRL81nB',
        spanInst,
        'ifFound'
      );
    }
  }

  async sd_c6LZxfceffqnduax(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c6LZxfceffqnduax');
    }
  }

  async ifSucceess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'ifSucceess',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.status = 200;
      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      const hashedPassword = await bcrypt.hash(bh.input.body['password'], 10);
      console.log('bcrypt hashed pass', hashedPassword);
      bh.input.body['password'] = hashedPassword;
      bh.body = bh.input.body;

      console.log('Body', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T3v962reCoKtkUSG(bh, parentSpanInst);
      //appendnew_next_ifSucceess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ddGSppBxeVEjXnUu',
        spanInst,
        'ifSucceess'
      );
    }
  }

  async sd_T3v962reCoKtkUSG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T3v962reCoKtkUSG',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_c6LZxfceffqnduax(bh, parentSpanInst);
      //appendnew_next_sd_T3v962reCoKtkUSG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T3v962reCoKtkUSG',
        spanInst,
        'sd_T3v962reCoKtkUSG'
      );
    }
  }

  async sd_XuI5ang6rLg5end7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XuI5ang6rLg5end7',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'files',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oqDjnw4MPRLCxxh8(bh, parentSpanInst);
      //appendnew_next_sd_XuI5ang6rLg5end7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XuI5ang6rLg5end7',
        spanInst,
        'sd_XuI5ang6rLg5end7'
      );
    }
  }

  async sd_oqDjnw4MPRLCxxh8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oqDjnw4MPRLCxxh8',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5nHU1K4fODmmzdmE(bh, parentSpanInst);
      //appendnew_next_sd_oqDjnw4MPRLCxxh8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oqDjnw4MPRLCxxh8',
        spanInst,
        'sd_oqDjnw4MPRLCxxh8'
      );
    }
  }

  async sd_5nHU1K4fODmmzdmE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5nHU1K4fODmmzdmE',
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
        bh = await this.sd_N43Evb5ywqf9HLqZ(bh, parentSpanInst);
      } else {
        bh = await this.sd_zB6RCba7lqBpwZY5(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5nHU1K4fODmmzdmE',
        spanInst,
        'sd_5nHU1K4fODmmzdmE'
      );
    }
  }

  async sd_N43Evb5ywqf9HLqZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N43Evb5ywqf9HLqZ',
      parentSpanInst
    );
    try {
      bh.filter = { _id: bh.input.body['_id'] };
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xAhRLp98ZvfJ2yiw(bh, parentSpanInst);
      //appendnew_next_sd_N43Evb5ywqf9HLqZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N43Evb5ywqf9HLqZ',
        spanInst,
        'sd_N43Evb5ywqf9HLqZ'
      );
    }
  }

  async sd_xAhRLp98ZvfJ2yiw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xAhRLp98ZvfJ2yiw',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().downloadFile(
        'sd_ajFrSs3mQRYSN97Z',
        bh.search.collection,
        bh.filter,
        bh
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Cze7LaUN51Zp9uG5(bh, parentSpanInst);
      //appendnew_next_sd_xAhRLp98ZvfJ2yiw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xAhRLp98ZvfJ2yiw',
        spanInst,
        'sd_xAhRLp98ZvfJ2yiw'
      );
    }
  }

  async sd_Cze7LaUN51Zp9uG5(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cze7LaUN51Zp9uG5');
    }
  }

  async sd_zB6RCba7lqBpwZY5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zB6RCba7lqBpwZY5',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'File not Found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Cze7LaUN51Zp9uG5(bh, parentSpanInst);
      //appendnew_next_sd_zB6RCba7lqBpwZY5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zB6RCba7lqBpwZY5',
        spanInst,
        'sd_zB6RCba7lqBpwZY5'
      );
    }
  }

  async sd_cNdl8vgocns6VGYF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cNdl8vgocns6VGYF',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { idNumber: bh.input.body.idNumber },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bI1YIRnJGh4Fglcx(bh, parentSpanInst);
      //appendnew_next_sd_cNdl8vgocns6VGYF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cNdl8vgocns6VGYF',
        spanInst,
        'sd_cNdl8vgocns6VGYF'
      );
    }
  }

  async sd_bI1YIRnJGh4Fglcx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bI1YIRnJGh4Fglcx',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WmdNO4n9TGzzjxTz(bh, parentSpanInst);
      //appendnew_next_sd_bI1YIRnJGh4Fglcx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bI1YIRnJGh4Fglcx',
        spanInst,
        'sd_bI1YIRnJGh4Fglcx'
      );
    }
  }

  async sd_WmdNO4n9TGzzjxTz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WmdNO4n9TGzzjxTz',
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
        bh = await this.sd_Xx9OmbQs6pyAGNcH(bh, parentSpanInst);
      } else {
        bh = await this.sd_bO3r8GbizlfNytl2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WmdNO4n9TGzzjxTz',
        spanInst,
        'sd_WmdNO4n9TGzzjxTz'
      );
    }
  }

  async sd_Xx9OmbQs6pyAGNcH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xx9OmbQs6pyAGNcH',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.resutl = bh.result[0];
      this.tracerService.sendData(spanInst, bh);
      await this.sd_t1e1KrE9R6WnqI7A(bh, parentSpanInst);
      //appendnew_next_sd_Xx9OmbQs6pyAGNcH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xx9OmbQs6pyAGNcH',
        spanInst,
        'sd_Xx9OmbQs6pyAGNcH'
      );
    }
  }

  async sd_t1e1KrE9R6WnqI7A(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t1e1KrE9R6WnqI7A');
    }
  }

  async sd_bO3r8GbizlfNytl2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bO3r8GbizlfNytl2',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = {
        message: 'User not found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_t1e1KrE9R6WnqI7A(bh, parentSpanInst);
      //appendnew_next_sd_bO3r8GbizlfNytl2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bO3r8GbizlfNytl2',
        spanInst,
        'sd_bO3r8GbizlfNytl2'
      );
    }
  }

  async sd_uq4lLunC71aFlNkj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uq4lLunC71aFlNkj',
      parentSpanInst
    );
    try {
      bh.collection = bh.input.body.collection;
      bh.filter = { email: bh.input.body['email'] };
      delete bh.input.body.collection;
      console.log('Deleted collection', delete bh.input.body.collection);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1ts6hALc1iwxyBRz(bh, parentSpanInst);
      //appendnew_next_sd_uq4lLunC71aFlNkj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uq4lLunC71aFlNkj',
        spanInst,
        'sd_uq4lLunC71aFlNkj'
      );
    }
  }

  async sd_1ts6hALc1iwxyBRz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1ts6hALc1iwxyBRz',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().deleteOne(
        'sd_ajFrSs3mQRYSN97Z',
        bh.collection,
        bh.filter,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EMPlfSvHonePZJWc(bh, parentSpanInst);
      //appendnew_next_sd_1ts6hALc1iwxyBRz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ts6hALc1iwxyBRz',
        spanInst,
        'sd_1ts6hALc1iwxyBRz'
      );
    }
  }

  async sd_EMPlfSvHonePZJWc(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EMPlfSvHonePZJWc');
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
  //appendnew_flow_auth_Catch
}
