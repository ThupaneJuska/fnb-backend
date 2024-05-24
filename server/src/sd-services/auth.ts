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

    this.app['put'](
      `${this.serviceBasePath}/status`,
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
          bh = await this.sd_lZSWfxDNEl6yCKxM(bh, parentSpanInst);
          //appendnew_next_sd_6CyS8TPipEXGaJLU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_6CyS8TPipEXGaJLU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/forgot-password`,
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
          bh = await this.sd_IA2OgDwcQNZbZXtM(bh, parentSpanInst);
          //appendnew_next_sd_j2nEOklY7b5SKH6B
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_j2nEOklY7b5SKH6B');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/verify-otp`,
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
          bh = await this.sd_mh91bhVNziPCCusO(bh, parentSpanInst);
          //appendnew_next_sd_gz6dq8FHPlal2Sfl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gz6dq8FHPlal2Sfl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

<<<<<<< HEAD
    this.app['get'](
      `${this.serviceBasePath}/get-users`,
=======
    this.app['put'](
      `${this.serviceBasePath}/update-limits`,
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
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
<<<<<<< HEAD
          bh = await this.sd_xcAfNpkho3zxE0fr(bh, parentSpanInst);
          //appendnew_next_sd_2AwmFR6x98aa2X6g
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2AwmFR6x98aa2X6g');
=======
          bh = await this.sd_0ujcK8Bl2aLCAc5h(bh, parentSpanInst);
          //appendnew_next_sd_z9MWxCq8ucpGQpi8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z9MWxCq8ucpGQpi8');
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
<<<<<<< HEAD
      `${this.serviceBasePath}/login`,
=======
      `${this.serviceBasePath}/create-limits:email`,
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
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
<<<<<<< HEAD
          bh = await this.sd_4VSJb3LCKqzWPHzs(bh, parentSpanInst);
          //appendnew_next_sd_oBsUxswjTcgMgsLh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oBsUxswjTcgMgsLh');
=======
          bh = await this.sd_Z6HfxOIVaC8Yv6JC(bh, parentSpanInst);
          //appendnew_next_sd_Wn5nQAXPTyyMFhWe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Wn5nQAXPTyyMFhWe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-limits:email`,
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
          bh = await this.sd_wIp15FDvAVY5LJhA(bh, parentSpanInst);
          //appendnew_next_sd_FBb2YhAllxfK5ToF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FBb2YhAllxfK5ToF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/send-application-email`,
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
          bh = await this.sd_K6SeCiHfk7UWWoQi(bh, parentSpanInst);
          //appendnew_next_sd_uxWhPOBDSYtSXJM9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uxWhPOBDSYtSXJM9');
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
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
      bh.input.body['OTP'] = '';
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
        collection: 'users',
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

  async sd_lZSWfxDNEl6yCKxM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lZSWfxDNEl6yCKxM',
      parentSpanInst
    );
    try {
      bh.collection = bh.input.body.collection;
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_svRXiAApQWbrqqla(bh, parentSpanInst);
      //appendnew_next_sd_lZSWfxDNEl6yCKxM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lZSWfxDNEl6yCKxM',
        spanInst,
        'sd_lZSWfxDNEl6yCKxM'
      );
    }
  }

  async sd_svRXiAApQWbrqqla(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_svRXiAApQWbrqqla',
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
      bh = await this.sd_wWhmgroqpanAcOha(bh, parentSpanInst);
      //appendnew_next_sd_svRXiAApQWbrqqla
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_svRXiAApQWbrqqla',
        spanInst,
        'sd_svRXiAApQWbrqqla'
      );
    }
  }

  async sd_wWhmgroqpanAcOha(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wWhmgroqpanAcOha',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.result.value.email,
        subject: 'FNB ACCOUNT',
        from: 'FNB',
        ptag: `<p>Your Application Has been Approved</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bJy17l51susoCvR6(bh, parentSpanInst);
      //appendnew_next_sd_wWhmgroqpanAcOha
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wWhmgroqpanAcOha',
        spanInst,
        'sd_wWhmgroqpanAcOha'
      );
    }
  }

  async sd_bJy17l51susoCvR6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bJy17l51susoCvR6',
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
          body: undefined,
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
      bh = await this.sd_5MqBi2KzB9oQr6Rs(bh, parentSpanInst);
      //appendnew_next_sd_bJy17l51susoCvR6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bJy17l51susoCvR6',
        spanInst,
        'sd_bJy17l51susoCvR6'
      );
    }
  }

  async sd_5MqBi2KzB9oQr6Rs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5MqBi2KzB9oQr6Rs',
      parentSpanInst
    );
    try {
      console.log('Found user', bh.result.value.email);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5MqBi2KzB9oQr6Rs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5MqBi2KzB9oQr6Rs',
        spanInst,
        'sd_5MqBi2KzB9oQr6Rs'
      );
    }
  }

  async sd_IA2OgDwcQNZbZXtM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IA2OgDwcQNZbZXtM',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.newPassword = bh.input.body.newPassword;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6K3nYNyyKU1CFWBP(bh, parentSpanInst);
      //appendnew_next_sd_IA2OgDwcQNZbZXtM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IA2OgDwcQNZbZXtM',
        spanInst,
        'sd_IA2OgDwcQNZbZXtM'
      );
    }
  }

  async sd_6K3nYNyyKU1CFWBP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6K3nYNyyKU1CFWBP',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.searchObj);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2lp13NsjXECaI0of(bh, parentSpanInst);
      //appendnew_next_sd_6K3nYNyyKU1CFWBP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6K3nYNyyKU1CFWBP',
        spanInst,
        'sd_6K3nYNyyKU1CFWBP'
      );
    }
  }

  async sd_2lp13NsjXECaI0of(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2lp13NsjXECaI0of',
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
        bh = await this.sendOtp(bh, parentSpanInst);
      } else {
        bh = await this.sd_jcLO4gylDGM9MCBM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2lp13NsjXECaI0of',
        spanInst,
        'sd_2lp13NsjXECaI0of'
      );
    }
  }

  async sendOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendOtp', parentSpanInst);
    try {
      const otp = bh.input.body.otp;
      bh.filter = { email: bh.input.body['email'] };

      bh.input.body = {
        ...bh.result[0],
      };
      bh.input.body.OTP = otp;
      bh.body = { $set: bh.input.body };

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
      bh = await this.sd_CsqlVcyusuyUG0DL(bh, parentSpanInst);
      //appendnew_next_sendOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VCqUyHSKEg02JT3J',
        spanInst,
        'sendOtp'
      );
    }
  }

  async sd_CsqlVcyusuyUG0DL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CsqlVcyusuyUG0DL',
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
      bh = await this.sd_DrhBAmxaKnEq08Pe(bh, parentSpanInst);
      //appendnew_next_sd_CsqlVcyusuyUG0DL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CsqlVcyusuyUG0DL',
        spanInst,
        'sd_CsqlVcyusuyUG0DL'
      );
    }
  }

  async sd_DrhBAmxaKnEq08Pe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DrhBAmxaKnEq08Pe',
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
      await this.sd_bJysZ30bupy8asBc(bh, parentSpanInst);
      //appendnew_next_sd_DrhBAmxaKnEq08Pe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DrhBAmxaKnEq08Pe',
        spanInst,
        'sd_DrhBAmxaKnEq08Pe'
      );
    }
  }

  async sd_bJysZ30bupy8asBc(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bJysZ30bupy8asBc');
    }
  }

  async sd_jcLO4gylDGM9MCBM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jcLO4gylDGM9MCBM',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User dont exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bJysZ30bupy8asBc(bh, parentSpanInst);
      //appendnew_next_sd_jcLO4gylDGM9MCBM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jcLO4gylDGM9MCBM',
        spanInst,
        'sd_jcLO4gylDGM9MCBM'
      );
    }
  }

  async sd_mh91bhVNziPCCusO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mh91bhVNziPCCusO',
      parentSpanInst
    );
    try {
      bh.searchObj = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3OZmy2peMJivw44w(bh, parentSpanInst);
      //appendnew_next_sd_mh91bhVNziPCCusO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mh91bhVNziPCCusO',
        spanInst,
        'sd_mh91bhVNziPCCusO'
      );
    }
  }

  async sd_3OZmy2peMJivw44w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3OZmy2peMJivw44w',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.searchObj);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OvuB5fnGljhZQPuV(bh, parentSpanInst);
      //appendnew_next_sd_3OZmy2peMJivw44w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3OZmy2peMJivw44w',
        spanInst,
        'sd_3OZmy2peMJivw44w'
      );
    }
  }

  async sd_OvuB5fnGljhZQPuV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OvuB5fnGljhZQPuV',
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
        bh = await this.verifyOtp(bh, parentSpanInst);
      } else {
        bh = await this.sd_XKNseNpxyuKrmvFk(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OvuB5fnGljhZQPuV',
        spanInst,
        'sd_OvuB5fnGljhZQPuV'
      );
    }
  }

  async verifyOtp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('verifyOtp', parentSpanInst);
    try {
      if (bh.result[0].OTP === bh.input.body.otp) {
        bh.isCorrectOtp = true;
      } else {
        bh.isCorrectOtp = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QoNkAjuCGfaNYXDh(bh, parentSpanInst);
      //appendnew_next_verifyOtp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vuCpnEfeDErUk41b',
        spanInst,
        'verifyOtp'
      );
    }
  }

  async sd_QoNkAjuCGfaNYXDh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QoNkAjuCGfaNYXDh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.isCorrectOtp,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_09u3nrSak6acL8NK(bh, parentSpanInst);
      } else {
        bh = await this.sd_a9iRk9LLwUR7SVIi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QoNkAjuCGfaNYXDh',
        spanInst,
        'sd_QoNkAjuCGfaNYXDh'
      );
    }
  }

  async sd_09u3nrSak6acL8NK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_09u3nrSak6acL8NK',
      parentSpanInst
    );
    try {
      bh.result = {};
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lK8sdqY5op4XM98w(bh, parentSpanInst);
      //appendnew_next_sd_09u3nrSak6acL8NK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_09u3nrSak6acL8NK',
        spanInst,
        'sd_09u3nrSak6acL8NK'
      );
    }
  }

  async sd_lK8sdqY5op4XM98w(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lK8sdqY5op4XM98w');
    }
  }

  async sd_a9iRk9LLwUR7SVIi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a9iRk9LLwUR7SVIi',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'OTP not match',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lK8sdqY5op4XM98w(bh, parentSpanInst);
      //appendnew_next_sd_a9iRk9LLwUR7SVIi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a9iRk9LLwUR7SVIi',
        spanInst,
        'sd_a9iRk9LLwUR7SVIi'
      );
    }
  }

  async sd_XKNseNpxyuKrmvFk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XKNseNpxyuKrmvFk',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'User dont exist',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lK8sdqY5op4XM98w(bh, parentSpanInst);
      //appendnew_next_sd_XKNseNpxyuKrmvFk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XKNseNpxyuKrmvFk',
        spanInst,
        'sd_XKNseNpxyuKrmvFk'
      );
    }
  }

<<<<<<< HEAD
  async sd_xcAfNpkho3zxE0fr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xcAfNpkho3zxE0fr',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hxDacUzGo640XwXu(bh, parentSpanInst);
      //appendnew_next_sd_xcAfNpkho3zxE0fr
=======
  async sd_0ujcK8Bl2aLCAc5h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0ujcK8Bl2aLCAc5h',
      parentSpanInst
    );
    try {
      bh.filter = { email: bh.input.body.email };
      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_K34W71iy2LJyjqa8(bh, parentSpanInst);
      //appendnew_next_sd_0ujcK8Bl2aLCAc5h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0ujcK8Bl2aLCAc5h',
        spanInst,
        'sd_0ujcK8Bl2aLCAc5h'
      );
    }
  }

  async sd_K34W71iy2LJyjqa8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K34W71iy2LJyjqa8',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_ajFrSs3mQRYSN97Z',
        'limits',
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9JCGjmbFzLuciwI6(bh, parentSpanInst);
      //appendnew_next_sd_K34W71iy2LJyjqa8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K34W71iy2LJyjqa8',
        spanInst,
        'sd_K34W71iy2LJyjqa8'
      );
    }
  }

  async sd_9JCGjmbFzLuciwI6(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9JCGjmbFzLuciwI6');
    }
  }

  async sd_Z6HfxOIVaC8Yv6JC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z6HfxOIVaC8Yv6JC',
      parentSpanInst
    );
    try {
      bh.body = {
        email: bh.input.params.email,
        tranfers: 500000,
        payments: 350000,
        payAndClear: 350000,
        prepaid: 1000,
        sendMoney: 3000,
        vouchers: 1000,
        cardlessWithdrawal: 1500,
        _id: new Date().getTime(),
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JuoeZTwuDUAQwlcz(bh, parentSpanInst);
      //appendnew_next_sd_Z6HfxOIVaC8Yv6JC
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
        'sd_xcAfNpkho3zxE0fr',
        spanInst,
        'sd_xcAfNpkho3zxE0fr'
=======
        'sd_Z6HfxOIVaC8Yv6JC',
        spanInst,
        'sd_Z6HfxOIVaC8Yv6JC'
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      );
    }
  }

<<<<<<< HEAD
  async sd_hxDacUzGo640XwXu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hxDacUzGo640XwXu',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WxDaZehPH5cGjHMI(bh, parentSpanInst);
      //appendnew_next_sd_hxDacUzGo640XwXu
=======
  async sd_JuoeZTwuDUAQwlcz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JuoeZTwuDUAQwlcz',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_ajFrSs3mQRYSN97Z',
        'limits',
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_a4Qox2lyJjOCJ1qY(bh, parentSpanInst);
      //appendnew_next_sd_JuoeZTwuDUAQwlcz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JuoeZTwuDUAQwlcz',
        spanInst,
        'sd_JuoeZTwuDUAQwlcz'
      );
    }
  }

  async sd_a4Qox2lyJjOCJ1qY(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a4Qox2lyJjOCJ1qY');
    }
  }

  async sd_wIp15FDvAVY5LJhA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wIp15FDvAVY5LJhA',
      parentSpanInst
    );
    try {
      bh.filter = { email: bh.input.params.email };
      console.log('bh.filter', bh.filter);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_REVs02xM2rXNISXA(bh, parentSpanInst);
      //appendnew_next_sd_wIp15FDvAVY5LJhA
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
        'sd_hxDacUzGo640XwXu',
        spanInst,
        'sd_hxDacUzGo640XwXu'
=======
        'sd_wIp15FDvAVY5LJhA',
        spanInst,
        'sd_wIp15FDvAVY5LJhA'
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      );
    }
  }

<<<<<<< HEAD
  async sd_WxDaZehPH5cGjHMI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WxDaZehPH5cGjHMI',
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
        bh = await this.sd_WWVKD7LbhtIxKgql(bh, parentSpanInst);
      } else {
        bh = await this.sd_WFsB4vp8wP0Uc0jf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

=======
  async sd_REVs02xM2rXNISXA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_REVs02xM2rXNISXA',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_ajFrSs3mQRYSN97Z',
        'limits',
        bh.filter,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_iuU32BmkRk80fbXn(bh, parentSpanInst);
      //appendnew_next_sd_REVs02xM2rXNISXA
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
        'sd_WxDaZehPH5cGjHMI',
        spanInst,
        'sd_WxDaZehPH5cGjHMI'
=======
        'sd_REVs02xM2rXNISXA',
        spanInst,
        'sd_REVs02xM2rXNISXA'
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      );
    }
  }

<<<<<<< HEAD
  async sd_WWVKD7LbhtIxKgql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WWVKD7LbhtIxKgql',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AfeVe46h74IT3M4P(bh, parentSpanInst);
      //appendnew_next_sd_WWVKD7LbhtIxKgql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WWVKD7LbhtIxKgql',
        spanInst,
        'sd_WWVKD7LbhtIxKgql'
      );
    }
  }

  async sd_AfeVe46h74IT3M4P(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AfeVe46h74IT3M4P');
    }
  }

  async sd_WFsB4vp8wP0Uc0jf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WFsB4vp8wP0Uc0jf',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_AfeVe46h74IT3M4P(bh, parentSpanInst);
      //appendnew_next_sd_WFsB4vp8wP0Uc0jf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WFsB4vp8wP0Uc0jf',
        spanInst,
        'sd_WFsB4vp8wP0Uc0jf'
      );
    }
  }

  async sd_4VSJb3LCKqzWPHzs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4VSJb3LCKqzWPHzs',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      console.log('bh.input.params', bh.input.params);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MBNgweWW8QJ3gy96(bh, parentSpanInst);
      //appendnew_next_sd_4VSJb3LCKqzWPHzs
=======
  async sd_iuU32BmkRk80fbXn(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iuU32BmkRk80fbXn');
    }
  }

  async sd_K6SeCiHfk7UWWoQi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K6SeCiHfk7UWWoQi',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: bh.input.body.subject,
        from: 'FNB',
        ptag: `<p>${bh.input.body.message}</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/First_National_Bank_Logo.svg/1200px-First_National_Bank_Logo.svg.png" alt="Example Image" width="250" height="100"  class="image">
    `,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YzFYFO3W9YNHvTQs(bh, parentSpanInst);
      //appendnew_next_sd_K6SeCiHfk7UWWoQi
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
        'sd_4VSJb3LCKqzWPHzs',
        spanInst,
        'sd_4VSJb3LCKqzWPHzs'
=======
        'sd_K6SeCiHfk7UWWoQi',
        spanInst,
        'sd_K6SeCiHfk7UWWoQi'
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      );
    }
  }

<<<<<<< HEAD
  async sd_MBNgweWW8QJ3gy96(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MBNgweWW8QJ3gy96',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OB6tUkmwnYkYgBt8(bh, parentSpanInst);
      //appendnew_next_sd_MBNgweWW8QJ3gy96
=======
  async sd_YzFYFO3W9YNHvTQs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YzFYFO3W9YNHvTQs',
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
          attachments: undefined,
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hEEKCQdEQYRpjxLb(bh, parentSpanInst);
      //appendnew_next_sd_YzFYFO3W9YNHvTQs
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
        'sd_MBNgweWW8QJ3gy96',
        spanInst,
        'sd_MBNgweWW8QJ3gy96'
=======
        'sd_YzFYFO3W9YNHvTQs',
        spanInst,
        'sd_YzFYFO3W9YNHvTQs'
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
      );
    }
  }

<<<<<<< HEAD
  async sd_OB6tUkmwnYkYgBt8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OB6tUkmwnYkYgBt8',
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
        bh = await this.sd_FllQj01ptdt9LAnU(bh, parentSpanInst);
      } else {
        bh = await this.sd_Gznm98dxQtDk93Lf(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OB6tUkmwnYkYgBt8',
        spanInst,
        'sd_OB6tUkmwnYkYgBt8'
      );
    }
  }

  async sd_FllQj01ptdt9LAnU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FllQj01ptdt9LAnU',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.result = bh.result[0];
      bh.match = await bcrypt.compare(
        bh.input.body.password,
        bh.result.password
      );

      console.log('BH Match', bh.match);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TOURp9qKIevsDjjf(bh, parentSpanInst);
      //appendnew_next_sd_FllQj01ptdt9LAnU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FllQj01ptdt9LAnU',
        spanInst,
        'sd_FllQj01ptdt9LAnU'
      );
    }
  }

  async sd_TOURp9qKIevsDjjf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TOURp9qKIevsDjjf',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QxCZmhDNfRBIwHKA(bh, parentSpanInst);
      } else {
        bh = await this.sd_0qZG0chn6JnJPErO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TOURp9qKIevsDjjf',
        spanInst,
        'sd_TOURp9qKIevsDjjf'
      );
    }
  }

  async sd_QxCZmhDNfRBIwHKA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QxCZmhDNfRBIwHKA',
      parentSpanInst
    );
    try {
      bh.status = 200;
      console.log('Match match');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_QxCZmhDNfRBIwHKA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QxCZmhDNfRBIwHKA',
        spanInst,
        'sd_QxCZmhDNfRBIwHKA'
      );
    }
  }

  async sd_0qZG0chn6JnJPErO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0qZG0chn6JnJPErO',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: "PASSWORD DON'T MATCH",
      };
      console.log('NO Match match');

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_0qZG0chn6JnJPErO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0qZG0chn6JnJPErO',
        spanInst,
        'sd_0qZG0chn6JnJPErO'
      );
    }
  }

  async sd_Gznm98dxQtDk93Lf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gznm98dxQtDk93Lf',
      parentSpanInst
    );
    try {
      console.log('Error Error');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Gznm98dxQtDk93Lf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gznm98dxQtDk93Lf',
        spanInst,
        'sd_Gznm98dxQtDk93Lf'
      );
=======
  async sd_hEEKCQdEQYRpjxLb(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hEEKCQdEQYRpjxLb');
>>>>>>> bcee358fc40506893a0891fe9873684b0e504b2a
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
