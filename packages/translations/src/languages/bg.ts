import type { DefaultTranslationsObject, Language } from '../types.js'

export const bgTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Профил',
    accountOfCurrentUser: 'Профил на текущия потребител',
    accountVerified: 'Профилът е верифициран успешно.',
    alreadyActivated: 'Вече активиран',
    alreadyLoggedIn: 'Вече влязъл',
    apiKey: 'API ключ',
    authenticated: 'Удостоверен',
    backToLogin: 'Обратно към влизане',
    beginCreateFirstUser: 'За да започнеш, създай първия си потребител',
    changePassword: 'Промяна на паролата',
    checkYourEmailForPasswordReset:
      'Ако имейл адресът е свързан с акаунт, скоро ще получите инструкции за възстановяване на паролата си. Моля, проверете папката си за спам или нежелана поща, ако не виждате имейла във входящата си поща.',
    confirmGeneration: 'Потвърди създаването',
    confirmPassword: 'Потвърди парола',
    createFirstUser: 'Създай първи потребител',
    emailNotValid: 'Даденият имейл не е валиден',
    emailOrUsername: 'Имейл или Потребителско име',
    emailSent: 'Имейлът е изпратен',
    emailVerified: 'Успешно потвърден имейл.',
    enableAPIKey: 'Активирай API ключ',
    failedToUnlock: 'Неуспешно отключване',
    forceUnlock: 'Принудително отключване',
    forgotPassword: 'Забравена парола',
    forgotPasswordEmailInstructions:
      'Моля, въведи имейла си по-долу. Ще получиш съобщение с насоки как да промениш паролата си.',
    forgotPasswordQuestion: 'Забравена парола?',
    forgotPasswordUsernameInstructions:
      'Моля, въведете вашето потребителско име по-долу. Инструкции как да възстановите паролата си ще бъдат изпратени на имейл адреса, асоцииран с вашето потребителско име.',
    generate: 'Генерирай',
    generateNewAPIKey: 'Генерирай нов API ключ',
    generatingNewAPIKeyWillInvalidate:
      'Генерирането на нов API ключ ще <1>анулира</1> предишния. Сигурен ли си, че искаш да продължиш?',
    lockUntil: 'Заключи до',
    logBackIn: 'Влез обратно',
    loggedIn: 'За да влезеш с друг потребител, първо трябва да <0>излезеш</0>.',
    loggedInChangePassword:
      'За да промениш паролата си, отиди в своя <0>профил</0> и я промени оттам.',
    loggedOutInactivity: 'Ти беше изкаран поради неактивност.',
    loggedOutSuccessfully: 'Излезе успешно.',
    loggingOut: 'Излизане...',
    login: 'Вход',
    loginAttempts: 'Опити за вход',
    loginUser: 'Вкарай потребител',
    loginWithAnotherUser: 'За да влезеш с друг потребител, първо трябва да <0>излезеш</0>.',
    logOut: 'Изход',
    logout: 'Изход',
    logoutSuccessful: 'Изходът беше успешен.',
    logoutUser: 'Изкарай потребител',
    newAccountCreated:
      'Току-що беше създаден нов профил за достъп до <a href="{{serverURL}}">{{serverURL}}</a> Моля, въведи връзката в браузъра си, за да потвърдиш имейла си: <a href="{{verificationURL}}">{{verificationURL}}</a><br> След като потвърдиш имейла си, ще можеш да влезеш успешно.',
    newAPIKeyGenerated: 'Нов API ключ е създаден.',
    newPassword: 'Нова парола',
    passed: 'Удостоверението е успешно',
    passwordResetSuccessfully: 'Паролата е променена успешно.',
    resetPassword: 'Възстанови парола',
    resetPasswordExpiration: 'Нулиране на изтичане на паролата',
    resetPasswordToken: 'Ключ за възстановяване на парола',
    resetYourPassword: 'Възстанови паролата си',
    stayLoggedIn: 'Запомни ме',
    successfullyRegisteredFirstUser: 'Успешна регистрация на първия потребител.',
    successfullyUnlocked: 'Успешно отключен',
    tokenRefreshSuccessful: 'Успешно опресняване на токена.',
    unableToVerify: 'Неуспешно потвърждение',
    username: 'Потребителско име',
    usernameNotValid: 'Предоставеното потребителско име не е валидно.',
    verified: 'Потвърден',
    verifiedSuccessfully: 'Потвърден успешно',
    verify: 'Потвърди',
    verifyUser: 'Потвърди потребител',
    verifyYourEmail: 'Потвърди имейла си',
    youAreInactive:
      'Не си бил активен от известно време и за твоя сигурност ще бъдеш изкаран от системата. Би ли пожелал да останеш вписан?',
    youAreReceivingResetPassword:
      'Получаваш това, защото ти (или някой друг) е заявил възстановяване на паролата. Натисни връзката или постави това в браузъра си, за да довършиш процеса:',
    youDidNotRequestPassword:
      'Ако не си заявил това, игнорирай този имейл и паролата ти ще остане непроменена.',
  },
  error: {
    accountAlreadyActivated: 'Този профил вече е активиран.',
    autosaving: 'Имаше проблем в автоматичното запазване на този документ.',
    correctInvalidFields: 'Моля, поправи некоректните полета.',
    deletingFile: 'Имаше грешка при изтриването на файла.',
    deletingTitle:
      'Имаше проблем при изтриването на {{title}}. Моля провери връзката си и опитай отново.',
    emailOrPasswordIncorrect: 'Имейлът или паролата не са правилни.',
    followingFieldsInvalid_one: 'Следното поле е некоректно:',
    followingFieldsInvalid_other: 'Следните полета са некоректни:',
    incorrectCollection: 'Грешна колекция',
    invalidFileType: 'Невалиден тип на файл',
    invalidFileTypeValue: 'Невалиден тип на файл: {{value}}',
    invalidRequestArgs: 'Невалидни аргументи в заявката: {{args}}',
    loadingDocument: 'Имаше проблем при зареждането на документа с идентификатор {{id}}.',
    localesNotSaved_one: 'Следната локализация не може да бъде запазена:',
    localesNotSaved_other: 'Следните локализации не могат да бъдат запазени:',
    logoutFailed: 'Излизането не бе успешно.',
    missingEmail: 'Липсващ имейл.',
    missingIDOfDocument: 'Липсващ идентификатор на документа за обновяване.',
    missingIDOfVersion: 'Липсващ идентификатор на версия.',
    missingRequiredData: 'Липсва задължителна информация.',
    noFilesUploaded: 'Никакви файлове не бяха качени.',
    noMatchedField: 'Поле не беше открито за "{{label}}"',
    notAllowedToAccessPage: 'Нямаш право на достъп до тази страница.',
    notAllowedToPerformAction: 'Нямаш право да извършиш това действие.',
    notFound: 'Заявеният ресурс не беше намерен.',
    noUser: 'Липсващ потребител',
    previewing: 'Имаше проблем при предварителното разглеждане на документа.',
    problemUploadingFile: 'Имаше проблем при качването на файла.',
    tokenInvalidOrExpired: 'Ключът е невалиден или изтекъл.',
    tokenNotProvided: 'Токенът не е предоставен.',
    unableToDeleteCount: 'Не беше възможно да се изтрият {{count}} от {{total}} {{label}}.',
    unableToReindexCollection:
      'Грешка при преиндексиране на колекцията {{collection}}. Операцията е прекратена.',
    unableToUpdateCount: 'Не беше възможно да се обновят {{count}} от {{total}} {{label}}.',
    unauthorized: 'Неоторизиран, трябва да влезеш, за да извършиш тази заявка.',
    unauthorizedAdmin: 'Неоторизиран, трябва да си администратор, за да извършиш тази заявка.',
    unknown: 'Неизвестна грешка.',
    unPublishingDocument: 'Имаше проблем при скриването на този документ.',
    unspecific: 'Грешка.',
    userEmailAlreadyRegistered: 'Потребител с дадения имейл вече е регистриран.',
    userLocked: 'Този потребител има прекалено много невалидни опити за влизане и е заключен.',
    usernameAlreadyRegistered: 'Потребител със зададеното потребителско име вече е регистриран.',
    usernameOrPasswordIncorrect: 'Предоставеното потребителско име или парола са неправилни.',
    valueMustBeUnique: 'Стойността трябва да е уникална',
    verificationTokenInvalid: 'Ключът за верификация е невалиден.',
  },
  fields: {
    addLabel: 'Добави {{label}}',
    addLink: 'Добави нова връзка',
    addNew: 'Добави нов',
    addNewLabel: 'Добави нов {{label}}',
    addRelationship: 'Добави отношение',
    addUpload: 'Качи',
    block: 'блок',
    blocks: 'блокове',
    blockType: 'Тип блок',
    chooseBetweenCustomTextOrDocument:
      'Избери между това да въведеш текстова връзка или да свържеш с друг документ.',
    chooseDocumentToLink: 'Избери документ, с който да свържеш',
    chooseFromExisting: 'Избери от съществуващите',
    chooseLabel: 'Избери {{label}}',
    collapseAll: 'Свий всички',
    customURL: 'Връзка',
    editLabelData: 'Редактирай информацията за {{label}}',
    editLink: 'Редактирай връзка',
    editRelationship: 'Редактирай отношение',
    enterURL: 'Въведи връзка',
    internalLink: 'Вътрешна връзка',
    itemsAndMore: '{{items}} и {{count}} повече',
    labelRelationship: '{{label}} връзка',
    latitude: 'Географска ширина',
    linkedTo: 'Свързано с <0>{{label}}</0>',
    linkType: 'Тип на връзката',
    longitude: 'Географска дължина',
    newLabel: 'Нов {{label}}',
    openInNewTab: 'Отвори в нов раздел',
    passwordsDoNotMatch: 'Паролите не са еднакви.',
    relatedDocument: 'Свързан документ',
    relationTo: 'Отношение с',
    removeRelationship: 'Премахни отношение',
    removeUpload: 'Премахни качване',
    saveChanges: 'Запази промените',
    searchForBlock: 'Търси блок',
    selectExistingLabel: 'Избери съществуващ {{label}}',
    selectFieldsToEdit: 'Избери полета за редактиране',
    showAll: 'Покажи всички',
    swapRelationship: 'Смени отношение',
    swapUpload: 'Смени качване',
    textToDisplay: 'Текст към дисплей',
    toggleBlock: 'Превключи блок',
    uploadNewLabel: 'Качи нов {{label}}',
  },
  general: {
    aboutToDelete: 'На път си да изтриеш {{label}} <1>{{title}}</1>. Сигурен ли си?',
    aboutToDeleteCount_many: 'На път си да изтриеш {{count}} {{label}}',
    aboutToDeleteCount_one: 'На път си да изтриеш {{count}} {{label}}',
    aboutToDeleteCount_other: 'На път си да изтриеш {{count}} {{label}}',
    addBelow: 'Добави отдолу',
    addFilter: 'Добави филтър',
    adminTheme: 'Цветова тема',
    all: 'Всички',
    allCollections: 'Всички колекции',
    and: 'И',
    anotherUser: 'Друг потребител',
    anotherUserTakenOver: 'Друг потребител пое редактирането на този документ.',
    applyChanges: 'Приложи промените',
    ascending: 'Възходящ',
    automatic: 'Автоматична',
    backToDashboard: 'Обратно към таблото',
    cancel: 'Отмени',
    changesNotSaved: 'Промените ти не са запазени. Ако напуснеш сега, ще ги загубиш.',
    clearAll: 'Изчисти всичко',
    close: 'Затвори',
    collapse: 'Свий',
    collections: 'Колекции',
    columns: 'Колони',
    columnToSort: 'Колона за сортиране',
    confirm: 'Потвърди',
    confirmCopy: 'Потвърди копирането',
    confirmDeletion: 'Потвърди изтриване',
    confirmDuplication: 'Потвърди дупликация',
    confirmReindex: 'Да се преиндексират всички {{collections}}?',
    confirmReindexAll: 'Да се преиндексират всички колекции?',
    confirmReindexDescription:
      'Това ще премахне съществуващите индекси и ще преиндексира документите в колекциите {{collections}}.',
    confirmReindexDescriptionAll:
      'Това ще премахне съществуващите индекси и ще преиндексира документите във всички колекции.',
    copied: 'Копирано',
    copy: 'Копирай',
    copying: 'Копиране',
    copyWarning:
      'Предстои да презапишете {{to}} с {{from}} за {{label}} {{title}}. Сигурни ли сте?',
    create: 'Създай',
    created: 'Създаден',
    createdAt: 'Създаден на',
    createNew: 'Създай нов',
    createNewLabel: 'Създай нов {{label}}',
    creating: 'Създава се',
    creatingNewLabel: 'Създаване на нов {{label}}',
    currentlyEditing:
      'в момента редактира този документ. Ако поемете управлението, те ще бъдат блокирани от продължаване на редактирането и може да загубят незаписаните промени.',
    custom: 'Персонализиран',
    dark: 'Тъмна',
    dashboard: 'Табло',
    delete: 'Изтрий',
    deletedCountSuccessfully: 'Изтрити {{count}} {{label}} успешно.',
    deletedSuccessfully: 'Изтрито успешно.',
    deleting: 'Изтриване...',
    depth: 'Дълбочина',
    descending: 'Низходящо',
    deselectAllRows: 'Демаркирай всички редове',
    document: 'Документ',
    documentLocked: 'Документът е заключен',
    documents: 'Документи',
    duplicate: 'Дупликирай',
    duplicateWithoutSaving: 'Дупликирай без да запазваш промените',
    edit: 'Редактирай',
    editedSince: 'Редактирано от',
    editing: 'Редактиране',
    editingLabel_many: 'Редактиране на {{count}} {{label}}',
    editingLabel_one: 'Редактиране на {{count}} {{label}}',
    editingLabel_other: 'Редактиране на {{count}} {{label}}',
    editingTakenOver: 'Редактирането е поето',
    editLabel: 'Редактирай {{label}}',
    email: 'Имейл',
    emailAddress: 'Имейл адрес',
    enterAValue: 'Въведи стойност',
    error: 'Грешка',
    errors: 'Грешки',
    fallbackToDefaultLocale: 'Използвай локализацията, която е по подразбиране',
    false: 'Невярно',
    filter: 'Филтрирай',
    filters: 'Филтри',
    filterWhere: 'Филтрирай {{label}} където',
    globals: 'Глобални',
    goBack: 'Върни се',
    isEditing: 'редактира',
    language: 'Език',
    lastModified: 'Последно променено',
    leaveAnyway: 'Напусни въпреки това',
    leaveWithoutSaving: 'Напусни без да запазиш',
    light: 'Светла',
    livePreview: 'Предварителен преглед',
    loading: 'Зарежда се',
    locale: 'Локализация',
    locales: 'Локализации',
    menu: 'Меню',
    moveDown: 'Надолу',
    moveUp: 'Нагоре',
    newPassword: 'Нова парола',
    next: 'Следващ',
    noDateSelected: 'Не е избрана дата',
    noFiltersSet: 'Няма зададени филтри',
    noLabel: '<Няма {{label}}>',
    none: 'Никакъв',
    noOptions: 'Няма опции',
    noResults:
      '{{label}} не е открит. {{label}} не съществува или никой не отговаря на зададените филтри.',
    notFound: 'Няма открит',
    nothingFound: 'Нищо не беше открито',
    noUpcomingEventsScheduled: 'Няма предстоящи събития.',
    noValue: 'Няма стойност',
    of: 'от',
    only: 'Само',
    open: 'Отвори',
    or: 'Или',
    order: 'Ред',
    overwriteExistingData: 'Презапишете съществуващите данни в полето',
    pageNotFound: 'Страницата не беше открита',
    password: 'Парола',
    payloadSettings: 'Настройки на Payload',
    perPage: 'На страница: {{limit}}',
    previous: 'Предишен',
    reindex: 'Преиндексиране',
    reindexingAll: 'Преиндексиране на всички {{collections}}.',
    remove: 'Премахни',
    reset: 'Нулиране',
    row: 'ред',
    rows: 'Редове',
    save: 'Запази',
    saving: 'Запазване...',
    schedulePublishFor: 'Планирано публикуване за {{title}}',
    searchBy: 'Търси по {{label}}',
    selectAll: 'Избери всички {{count}} {{label}}',
    selectAllRows: 'Избери всички редове',
    selectedCount: '{{count}} {{label}} избрани',
    selectValue: 'Избери стойност',
    showAllLabel: 'Покажи всички {{label}}',
    sorryNotFound: 'Съжаляваме-няма нищо, което да отговаря на търсенето ти.',
    sort: 'Сортирай',
    sortByLabelDirection: 'Сортирай по {{label}} {{direction}}',
    stayOnThisPage: 'Остани на тази страница',
    submissionSuccessful: 'Успешно подаване.',
    submit: 'Подай',
    submitting: 'Подаване...',
    success: 'Успех',
    successfullyCreated: '{{label}} успешно създаден.',
    successfullyDuplicated: '{{label}} успешно дупликиран.',
    successfullyReindexed:
      'Успешно преиндексирани {{count}} от {{total}} документа от {{collections}} колекции.',
    takeOver: 'Поемане',
    thisLanguage: 'Български',
    time: 'Време',
    titleDeleted: '{{label}} "{{title}}" успешно изтрит.',
    true: 'Вярно',
    unauthorized: 'Неоторизиран',
    unsavedChanges: 'Имате незапазени промени. Запазете или отхвърлете преди да продължите.',
    unsavedChangesDuplicate: 'Имаш незапазени промени. Искаш ли да продължиш да дупликираш?',
    untitled: 'Неозаглавен',
    upcomingEvents: 'Предстоящи събития',
    updatedAt: 'Обновен на',
    updatedCountSuccessfully: 'Обновени {{count}} {{label}} успешно.',
    updatedSuccessfully: 'Обновен успешно.',
    updating: 'Обновява се',
    uploading: 'Качва се',
    uploadingBulk: 'Качване на {{current}} от {{total}}',
    user: 'Потребител',
    username: 'Потребителско име',
    users: 'Потребители',
    value: 'Стойност',
    viewReadOnly: 'Преглед само за четене',
    welcome: 'Добре дошъл',
  },
  localization: {
    cannotCopySameLocale: 'Не може да се копира в същата локация',
    copyFrom: 'Копирай от',
    copyFromTo: 'Копиране от {{from}} към {{to}}',
    copyTo: 'Копирай в',
    copyToLocale: 'Копирайте в местното',
    localeToPublish: 'Местоположение за публикуване',
    selectLocaleToCopy: 'Изберете място за копиране',
  },
  operators: {
    contains: 'съдържа',
    equals: 'е равно на',
    exists: 'съществува',
    intersects: 'пресича',
    isGreaterThan: 'е по-голямо от',
    isGreaterThanOrEqualTo: 'е по-голямо от или равно на',
    isIn: 'е в',
    isLessThan: 'е по-малко от',
    isLessThanOrEqualTo: 'е по-малко от или равно на',
    isLike: 'е като',
    isNotEqualTo: 'не е равно на',
    isNotIn: 'не е в',
    near: 'близко',
    within: 'в рамките на',
  },
  upload: {
    addFile: 'Добавяне на файл',
    addFiles: 'Добави файлове',
    bulkUpload: 'Масово Качване',
    crop: 'Изрязване',
    cropToolDescription:
      'Плъзни ъглите на избраната област, избери нова област или коригирай стойностите по-долу.',
    dragAndDrop: 'Дръпни и пусни файл',
    dragAndDropHere: 'или дръпни и пусни файла тук',
    editImage: 'Редактирай изображение',
    fileName: 'Име на файла',
    fileSize: 'Големина на файла',
    filesToUpload: 'Файлове за качване',
    fileToUpload: 'Файл за качване',
    focalPoint: 'Фокусна точка',
    focalPointDescription:
      'Премести фокусната точка директно върху визуализацията или регулирай стойностите по-долу.',
    height: 'Височина',
    lessInfo: 'По-малко информация',
    moreInfo: 'Повече информация',
    pasteURL: 'Поставяне на URL',
    previewSizes: 'Преглед на размери',
    selectCollectionToBrowse: 'Избери колекция, която да разгледаш',
    selectFile: 'Избери файл',
    setCropArea: 'Задай област за изрязване',
    setFocalPoint: 'Задай фокусна точка',
    sizes: 'Големини',
    sizesFor: 'Размери за {{label}}',
    width: 'Ширина',
  },
  validation: {
    emailAddress: 'Моля, въведи валиден имейл адрес.',
    enterNumber: 'Моля, въведи валиден номер.',
    fieldHasNo: 'Това поле няма {{label}}',
    greaterThanMax: '{{value}} е по-голямо от максимално допустимото {{label}} от {{max}}.',
    invalidInput: 'Това поле има невалиден вход.',
    invalidSelection: 'Това поле има невалидна селекция.',
    invalidSelections: 'Това поле има следните невалидни селекции:',
    lessThanMin: '{{value}} е по-малко от минимално допустимото {{label}} от {{min}}.',
    limitReached: 'Достигнат е лимитът, могат да бъдат добавени само {{max}} елемента.',
    longerThanMin:
      'Тази стойност трябва да е по-голяма от минималната стойност от {{minLength}} символа.',
    notValidDate: '"{{value}}" не е валидна дата.',
    required: 'Това поле е задължително.',
    requiresAtLeast: 'Това поле изисква поне {{count}} {{label}}.',
    requiresNoMoreThan: 'Това поле изисква не повече от {{count}} {{label}}.',
    requiresTwoNumbers: 'Това поле изисква 2 числа.',
    shorterThanMax:
      'Тази стойност трябва да е по-малка от максималната стойност от {{maxLength}} символа.',
    trueOrFalse: 'Това поле може да бъде само "true" или "false".',
    username:
      'Моля, въведете валидно потребителско име. Може да съдържа букви, цифри, тирета, точки и долни черти.',
    validUploadID: 'Това поле не е валиден идентификатор на качването.',
  },
  version: {
    type: 'Тип',
    aboutToPublishSelection: 'На път си да публикуваш всички избрани {{label}}. Сигурен ли си?',
    aboutToRestore:
      'На път си да възстановиш този {{label}} документ до състоянието му от {{versionDate}}.',
    aboutToRestoreGlobal:
      'На път си да възстановиш глобалния документ {{label}} до състоянието му от {{versionDate}}.',
    aboutToRevertToPublished:
      'На път си да възстановиш промените на този документ до публикуваното му състояние. Сигурен ли си?',
    aboutToUnpublish: 'На път си да скриеш този документ. Сигурен ли си?',
    aboutToUnpublishSelection: 'На път си да скриеш всички избрани {{label}}. Сигурен ли си?',
    autosave: 'Автоматично запазване',
    autosavedSuccessfully: 'Успешно автоматично запазване.',
    autosavedVersion: 'Автоматично запазена версия',
    changed: 'Променен',
    compareVersion: 'Сравни версия с:',
    confirmPublish: 'Потвърди публикуване',
    confirmRevertToSaved: 'Потвърди възстановяване до запазен',
    confirmUnpublish: 'Потвърди скриване',
    confirmVersionRestoration: 'Потвърди възстановяване на версия',
    currentDocumentStatus: 'Сегашен статус на документа: {{docStatus}}',
    currentDraft: 'Текущ проект',
    currentPublishedVersion: 'Текуща публикувана версия',
    draft: 'Чернова',
    draftSavedSuccessfully: 'Чернова запазена успешно.',
    lastSavedAgo: 'последно запазено преди {{distance}}',
    noFurtherVersionsFound: 'Не са открити повече версии',
    noRowsFound: 'Не е открит {{label}}',
    noRowsSelected: 'Не е избран {{label}}',
    preview: 'Предварителен преглед',
    previouslyPublished: 'Предишно публикувано',
    problemRestoringVersion: 'Имаше проблем при възстановяването на тази версия',
    publish: 'Публикувай',
    publishChanges: 'Публикувай промените',
    published: 'Публикувано',
    publishIn: 'Публикувайте в {{locale}}',
    publishing: 'Публикуване',
    restoreAsDraft: 'Възстанови като чернова',
    restoredSuccessfully: 'Успешно възстановяване.',
    restoreThisVersion: 'Възстанови тази версия',
    restoring: 'Възстановяване...',
    reverting: 'Връщане..',
    revertToPublished: 'Върни се до публикуваното',
    saveDraft: 'Запази чернова',
    scheduledSuccessfully: 'Успешно насрочено.',
    schedulePublish: 'Планирано публикуване',
    selectLocales: 'Избери локализации за показване',
    selectVersionToCompare: 'Избери версия за сравняване',
    showingVersionsFor: 'Показване на версии за:',
    showLocales: 'Покажи преводи:',
    status: 'Статус',
    unpublish: 'Скрий',
    unpublishing: 'Скриване...',
    version: 'Версия',
    versionCount_many: '{{count}} открити версии',
    versionCount_none: 'Няма открити версии',
    versionCount_one: '{{count}} открита версия',
    versionCount_other: '{{count}} открити версии',
    versionCreatedOn: '{{version}} създадена на:',
    versionID: 'Идентификатор на версията',
    versions: 'Версии',
    viewingVersion: 'Гледане на версия за {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Гледане на версия за глобалния документ {{entityLabel}}',
    viewingVersions: 'Гледане на версии за {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Гледане на версии за глобалния документ {{entityLabel}}',
  },
}

export const bg: Language = {
  dateFNSKey: 'bg',
  translations: bgTranslations,
}
