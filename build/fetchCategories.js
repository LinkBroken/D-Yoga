var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchCat() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("https://yoga-api-nzy4.onrender.com/v1/categories", { cache: "force-cache" }).then(Response => Response === null || Response === void 0 ? void 0 : Response.json()).then(data => data);
        return data;
    });
}
