define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home/index', nav: true, title: 'Greeter' },
                { route: 'charging-history', name: 'charging-history', moduleId: 'charging-history/index', nav: true, title: 'Charging History' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBWUEsQ0FBQztRQVRRLDZCQUFlLEdBQXRCLFVBQXVCLE1BQTJCLEVBQUUsTUFBYztZQUNoRSxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQU8sUUFBUSxFQUFFLFlBQVksRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7Z0JBQ3BHLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7YUFDbkksQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHVibGljIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAnaG9tZSddLCBuYW1lOiAnaG9tZScsICAgICAgbW9kdWxlSWQ6ICdob21lL2luZGV4JywgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnR3JlZXRlcicgfSxcbiAgICAgIHsgcm91dGU6ICdjaGFyZ2luZy1oaXN0b3J5JywgIG5hbWU6ICdjaGFyZ2luZy1oaXN0b3J5JywgbW9kdWxlSWQ6ICdjaGFyZ2luZy1oaXN0b3J5L2luZGV4JywgbmF2OiB0cnVlLCB0aXRsZTogJ0NoYXJnaW5nIEhpc3RvcnknIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true,
        apiBaseUrl: 'https://amg-test4.azurewebsites.net/api/',
        apiKey: 'jICojqc4B1/FGyfnhJ7KuUUtE5/vkgjbCzIRcZanpfeKo/kLDoFXZQ=='
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtRQUNiLFVBQVUsRUFBRSwwQ0FBMEM7UUFDdEQsTUFBTSxFQUFFLDBEQUEwRDtLQUNuRSxDQUFDIiwiZmlsZSI6ImVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBkZWJ1ZzogdHJ1ZSxcbiAgdGVzdGluZzogdHJ1ZSxcbiAgYXBpQmFzZVVybDogJ2h0dHBzOi8vYW1nLXRlc3Q0LmF6dXJld2Vic2l0ZXMubmV0L2FwaS8nLFxuICBhcGlLZXk6ICdqSUNvanFjNEIxL0ZHeWZuaEo3S3VVVXRFNS92a2dqYkN6SVJjWmFucGZlS28va0xEb0ZYWlE9PSdcbn07XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "aurelia-fetch-client", "./environment"], function (require, exports, aurelia_fetch_client_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration();
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        var httpClient = aurelia.container.get(aurelia_fetch_client_1.HttpClient);
        httpClient.configure(function (config) {
            config
                .withDefaults({
                headers: {
                    'x-functions-key': environment_1.default.apiKey,
                    'Content-Type': 'application/json'
                }
            })
                .withBaseUrl(environment_1.default.apiBaseUrl);
        });
        aurelia.use.instance(aurelia_fetch_client_1.HttpClient, httpClient);
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUUsQ0FBQztRQUUzQixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxJQUFNLFVBQVUsR0FBZSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQ0FBVSxDQUFDLENBQUM7UUFFakUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekIsTUFBTTtpQkFDSCxZQUFZLENBQUM7Z0JBQ1osT0FBTyxFQUFFO29CQUNQLGlCQUFpQixFQUFFLHFCQUFXLENBQUMsTUFBTTtvQkFDckMsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkM7YUFDRixDQUFDO2lCQUNELFdBQVcsQ0FBQyxxQkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUNBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU3QyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBeEJELDhCQXdCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGNvbnN0IGh0dHBDbGllbnQ6IEh0dHBDbGllbnQgPSBhdXJlbGlhLmNvbnRhaW5lci5nZXQoSHR0cENsaWVudCk7XG4gIFxuICBodHRwQ2xpZW50LmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgIGNvbmZpZy8vLnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgICAud2l0aERlZmF1bHRzKHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICd4LWZ1bmN0aW9ucy1rZXknOiBlbnZpcm9ubWVudC5hcGlLZXksXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLndpdGhCYXNlVXJsKGVudmlyb25tZW50LmFwaUJhc2VVcmwpO1xuICB9KTtcblxuICBhdXJlbGlhLnVzZS5pbnN0YW5jZShIdHRwQ2xpZW50LCBodHRwQ2xpZW50KTtcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('charging-history/index',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(httpClient) {
            this.httpClient = httpClient;
            this.history = [];
        }
        App.prototype.activate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, this.httpClient.fetch('vehicles')];
                        case 1:
                            response = _b.sent();
                            _a = this;
                            return [4, response.json()];
                        case 2:
                            _a.vehicles = _b.sent();
                            return [2];
                    }
                });
            });
        };
        App.prototype.selectVehicle = function (vehicle) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!vehicle) return [3, 2];
                            this.selectedVehicle = vehicle;
                            return [4, this.fetchChargingData(this.selectedVehicle.id)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        App.prototype.fetchChargingData = function (vehicleId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, this.httpClient.fetch("charges/" + vehicleId)];
                        case 1:
                            response = _b.sent();
                            _a = this;
                            return [4, response.json()];
                        case 2:
                            _a.history = _b.sent();
                            return [2];
                    }
                });
            });
        };
        App = __decorate([
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJnaW5nLWhpc3RvcnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNQTtRQUlFLGFBQW9CLFVBQXNCO1lBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7WUFEMUMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNpQyxDQUFDO1FBRXpDLHNCQUFRLEdBQWQ7Ozs7O2dDQUNtQixXQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFBOzs0QkFBbEQsUUFBUSxHQUFHLFNBQXVDOzRCQUV4RCxLQUFBLElBQUksQ0FBQTs0QkFBWSxXQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7NEJBQXJDLEdBQUssUUFBUSxHQUFHLFNBQXFCLENBQUM7Ozs7O1NBQ3ZDO1FBRUssMkJBQWEsR0FBbkIsVUFBb0IsT0FBTzs7Ozs7aUNBQ3RCLE9BQU8sRUFBUCxjQUFPOzRCQUNSLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDOzRCQUUvQixXQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzs0QkFBckQsU0FBcUQsQ0FBQzs7Ozs7O1NBRXpEO1FBRUssK0JBQWlCLEdBQXZCLFVBQXdCLFNBQVM7Ozs7O2dDQUNkLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBVyxTQUFXLENBQUMsRUFBQTs7NEJBQTlELFFBQVEsR0FBRyxTQUFtRDs0QkFFcEUsS0FBQSxJQUFJLENBQUE7NEJBQVcsV0FBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7OzRCQUFwQyxHQUFLLE9BQU8sR0FBRyxTQUFxQixDQUFDOzs7OztTQUN0QztRQXhCVSxHQUFHO1lBRGYsOEJBQVUsRUFBRTs2Q0FLcUIsaUNBQVU7V0FKL0IsR0FBRyxDQXlCZjtRQUFELFVBQUM7S0F6QkQsQUF5QkMsSUFBQTtJQXpCWSxrQkFBRyIsImZpbGUiOiJjaGFyZ2luZy1oaXN0b3J5L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5cbmltcG9ydCB7Q2hhcmdlLCBDaGFyZ2VEYXRlLCBWZWhpY2xlfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5AYXV0b2luamVjdCgpXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgc2VsZWN0ZWRWZWhpY2xlOiBWZWhpY2xlO1xuICB2ZWhpY2xlcyA6IEFycmF5PFZlaGljbGU+O1xuICBoaXN0b3J5ID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgYXN5bmMgYWN0aXZhdGUoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZmV0Y2goJ3ZlaGljbGVzJyk7XG5cbiAgICB0aGlzLnZlaGljbGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgYXN5bmMgc2VsZWN0VmVoaWNsZSh2ZWhpY2xlKSB7XG4gICAgaWYodmVoaWNsZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZFZlaGljbGUgPSB2ZWhpY2xlO1xuXG4gICAgICBhd2FpdCB0aGlzLmZldGNoQ2hhcmdpbmdEYXRhKHRoaXMuc2VsZWN0ZWRWZWhpY2xlLmlkKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaENoYXJnaW5nRGF0YSh2ZWhpY2xlSWQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cENsaWVudC5mZXRjaChgY2hhcmdlcy8ke3ZlaGljbGVJZH1gKTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('charging-history/interfaces',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyZ2luZy1oaXN0b3J5L2ludGVyZmFjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('home/index',["require", "exports", "aurelia-framework", "aurelia-fetch-client"], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home(httpClient) {
            this.httpClient = httpClient;
            this.heading = 'Welcome to the Serverless SPA!';
            this.firstName = 'John';
            this.lastName = 'Doe';
        }
        Object.defineProperty(Home.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Home.prototype.greet = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response, greeting;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.httpClient.fetch("greeter/" + this.fullName)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            greeting = _a.sent();
                            alert(greeting);
                            return [2];
                    }
                });
            });
        };
        __decorate([
            aurelia_framework_1.computedFrom('firstName', 'lastName'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], Home.prototype, "fullName", null);
        Home = __decorate([
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUNFLGNBQW9CLFVBQXNCO1lBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7WUFFbkMsWUFBTyxHQUFHLGdDQUFnQyxDQUFDO1lBQzNDLGNBQVMsR0FBRyxNQUFNLENBQUM7WUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUpzQixDQUFDO1FBTy9DLHNCQUFJLDBCQUFRO2lCQUFaO2dCQUNFLE1BQU0sQ0FBSSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFVLENBQUM7WUFDOUMsQ0FBQzs7O1dBQUE7UUFFWSxvQkFBSyxHQUFsQjs7Ozs7Z0NBQ21CLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBVyxJQUFJLENBQUMsUUFBVSxDQUFDLEVBQUE7OzRCQUFsRSxRQUFRLEdBQUcsU0FBdUQ7NEJBQ3ZELFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzs0QkFBaEMsUUFBUSxHQUFHLFNBQXFCOzRCQUN0QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7O1NBQ2pCO1FBUkQ7WUFEQyxnQ0FBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7Ozs0Q0FHckM7UUFWVSxJQUFJO1lBRGhCLDhCQUFVLEVBQUU7NkNBRXFCLGlDQUFVO1dBRC9CLElBQUksQ0FpQmhCO1FBQUQsV0FBQztLQWpCRCxBQWlCQyxJQUFBO0lBakJZLG9CQUFJIiwiZmlsZSI6ImhvbWUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5AYXV0b2luamVjdCgpXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgcHVibGljIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgU2VydmVybGVzcyBTUEEhJztcbiAgcHVibGljIGZpcnN0TmFtZSA9ICdKb2huJztcbiAgcHVibGljIGxhc3ROYW1lID0gJ0RvZSc7XG4gIFxuICBAY29tcHV0ZWRGcm9tKCdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKVxuICBnZXQgZnVsbE5hbWUoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBncmVldCgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cENsaWVudC5mZXRjaChgZ3JlZXRlci8ke3RoaXMuZnVsbE5hbWV9YCk7XG4gICAgY29uc3QgZ3JlZXRpbmcgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgYWxlcnQoZ3JlZXRpbmcpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"app.css\"></require><require from=\"nav-bar.html\"></require><nav-bar router.bind=\"router\"></nav-bar><div class=\"page-host\"><router-view></router-view></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  margin: 0;\n}\n\n.splash {\n  text-align: center;\n  margin: 10% 0 0 0;\n  box-sizing: border-box;\n}\n\n.splash .message {\n  font-size: 72px;\n  line-height: 72px;\n  text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\n  text-transform: uppercase;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.splash .fa-spinner {\n  text-align: center;\n  display: inline-block;\n  font-size: 72px;\n  margin-top: 50px;\n}\n\n.page-host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n@media print {\n  .page-host {\n    position: absolute;\n    left: 10px;\n    right: 0;\n    top: 50px;\n    bottom: 0;\n    overflow-y: inherit;\n    overflow-x: inherit;\n  }\n}\n\nsection {\n  margin: 0 20px;\n}\n\n.navbar-nav li.loader {\n  margin: 12px 24px 0 6px;\n}\n\n.pictureDetail {\n  max-width: 425px;\n}\n\n/* animate page transitions */\nsection.au-enter-active {\n  -webkit-animation: fadeInRight 1s;\n  animation: fadeInRight 1s;\n}\n\ndiv.au-stagger {\n  /* 50ms will be applied between each successive enter operation */\n  -webkit-animation-delay: 50ms;\n  animation-delay: 50ms;\n}\n\n.card-container.au-enter {\n  opacity: 0 !important;\n}\n\n.card-container.au-enter-active {\n  -webkit-animation: fadeIn 2s;\n  animation: fadeIn 2s;\n}\n\n.card {\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #CCC;\n  border-radius: 8px;\n  text-align: center;\n  padding: 0;\n  background-color: #337ab7;\n  color: rgb(136, 172, 217);\n  margin-bottom: 32px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, .5);\n}\n\n.card .content {\n  margin-top: 10px;\n}\n\n.card .content .name {\n  color: white;\n  text-shadow: 0 0 6px rgba(0, 0, 0, .5);\n  font-size: 18px;\n}\n\n.card .header-bg {\n  /* This stretches the canvas across the entire hero unit */\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  border-bottom: 1px #FFF solid;\n  border-radius: 6px 6px 0 0;\n}\n\n.card .avatar {\n  position: relative;\n  margin-top: 15px;\n  z-index: 100;\n}\n\n.card .avatar img {\n  width: 100px;\n  height: 100px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  border: 2px #FFF solid;\n}\n\n/* animation definitions */\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0)\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0)\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\"><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!charging-history/index.html', ['module'], function(module) { module.exports = "<template><section class=\"au-animate col-sm-3\"><h2>Electric Vehicle Charging Data</h2><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> ${selectedVehicle ? selectedVehicle.name : 'Choose a vehicle' } <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li repeat.for=\"vehicle of vehicles\"><a href=\"#\" click.delegate=\"selectVehicle(vehicle)\"> ${vehicle.name} </a></li></ul></div><table if.bind=\"history && history.data\" class=\"table table-striped\"><thead><tr><th>Plug-In</th><th>Plug-Out</th><th>Energy (kWh)</th><th>Charging Time</th></tr></thead><tbody><tr repeat.for=\"charge of history.data\"><td> ${charge.plugIn.prettyDate} </td><td> ${charge.plugOut.prettyDate} </td><td> ${charge.energy} </td><td> ${charge.chargingTime} </td></tr></tbody></table></section></template>"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template><section class=\"au-animate col-sm-3\"><h2>${heading}</h2><form role=\"form\" submit.delegate=\"greet()\"><div class=\"form-group\"><label for=\"fn\">First Name</label><input type=\"text\" value.bind=\"firstName\" class=\"form-control\" id=\"fn\" placeholder=\"first name\"></div><div class=\"form-group\"><label for=\"ln\">Last Name</label><input type=\"text\" value.bind=\"lastName\" class=\"form-control\" id=\"ln\" placeholder=\"last name\"></div><div class=\"form-group\"><label>Full Name</label><p class=\"help-block\">${fullName}</p></div><button type=\"submit\" class=\"btn btn-default\">Submit</button></form></section></template>"; });