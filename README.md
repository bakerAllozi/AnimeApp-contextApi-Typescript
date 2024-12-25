## Key TypeScript Features:

### **`AnimeContextType`** - Strong Typing for Context:

- **AnimeContextType**: هذا النوع يُستخدم لتعريف هيكل البيانات داخل `AnimeContext`. حيث يضمن TypeScript أن كل خاصية في السياق تحتوي على نوع دقيق، مما يساعد على منع الأخطاء أثناء التطوير ويضمن التعامل الصحيح مع البيانات داخل التطبيق.

```typescript
interface AnimeContextType {
  isLod: boolean;
  obj: AnimeType[];
  natFound: boolean;
  nameAnime: AnimeType[] | null;
  isLod2: boolean;
  anime: AnimeType | null;
  watched: AnimeType[];
  searchAnime: string;
  isC: boolean;
  isR: boolean;
  setIsC: React.Dispatch<React.SetStateAction<boolean>>;
  setIsR: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchAnime: React.Dispatch<React.SetStateAction<string>>;
  handleDetails: (anime: AnimeType) => void;
  handleAddWatched: (anime: AnimeType) => void;
  handleRemoveWatched: (anime: AnimeType) => void;
  animeTopApi: AnimeType[];
}
```

- **Type Safety in Context**: باستخدام `AnimeContextType`، نضمن أن كل قيمة يتم تمريرها عبر `AnimeContext` تتبع الهيكل المحدد، مما يقلل من إمكانية حدوث الأخطاء بسبب البيانات غير المتوافقة أو غير المتوقعة.

### **Custom Hooks & Context with Strong Types**:

```typescript
const AnimeContext = createContext<AnimeContextType | undefined>(undefined);
```

- هذا يضمن أن جميع القيم التي يتم تمريرها من خلال `AnimeContext` تتبع النوع المعلن في `AnimeContextType`. يتم توفير هذا السياق عبر `AnimeProvider` الذي يحتوي على كافة الوظائف والحالات الخاصة بالتطبيق.

---

## Why `AnimeContextType` Makes a Difference:

- **Explicit Types for State Variables**: مع TypeScript، يمكنك تحديد أنواع كل حالة (`useState`), مثل `anime`, `watched`, و `searchAnime`. على سبيل المثال:

```typescript
const [anime, setAnime] = useState<AnimeType | null>(null);
const [watched, setWatched] = useState<AnimeType[]>([]);
const [searchAnime, setSearchAnime] = useState<string>("");
```

- **Ensuring Consistent Data**: كل البيانات التي يتم التعامل معها في `AnimeContext` تتبع الأنواع المحددة في `AnimeContextType`، مما يضمن التناسق والموثوقية عبر جميع الأجزاء في التطبيق.

- **Error Prevention**: عند محاولة استخدام أي من البيانات في السياق مع نوع غير متوافق، سيعطيك TypeScript خطأ، مما يساعدك في اكتشاف الأخطاء قبل أن تصل إلى بيئة الإنتاج.

---

## Code Snippets:

### Example: Providing Context with `AnimeContextType`

```typescript
<AnimeContext.Provider
  value={{
    isLod,
    obj,
    natFound,
    nameAnime,
    isLod2,
    anime,
    watched,
    searchAnime,
    isC,
    isR,
    setIsC,
    setIsR,
    handleRemoveWatched,
    handleAddWatched,
    handleDetails,
    setSearchAnime,
    animeTopApi,
  }}
>
  {children}
</AnimeContext.Provider>
```
