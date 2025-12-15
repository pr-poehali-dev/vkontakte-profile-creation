import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  const friends = [
    { id: 1, name: "Мария Петрова", avatar: "МП", online: true },
    { id: 2, name: "Дмитрий Сидоров", avatar: "ДС", online: false },
    { id: 3, name: "Anna Smith", avatar: "AS", online: true, fake: true },
    { id: 4, name: "Елена Иванова", avatar: "ЕИ", online: false },
    { id: 5, name: "John Doe", avatar: "JD", online: false, fake: true },
    { id: 6, name: "Олег Смирнов", avatar: "ОС", online: true },
    { id: 7, name: "Test User 123", avatar: "TU", online: false, fake: true },
    { id: 8, name: "Анна Козлова", avatar: "АК", online: true },
    { id: 9, name: "Bot_9999", avatar: "BT", online: false, fake: true },
    { id: 10, name: "Игорь Волков", avatar: "ИВ", online: false },
    { id: 11, name: "Светлана Лебедева", avatar: "СЛ", online: true },
    { id: 12, name: "Fake Profile", avatar: "FP", online: false, fake: true },
  ];

  return (
    <div className="min-h-screen bg-[#edeef0]">
      {/* Header */}
      <header className="bg-[#4A76A8] text-white py-2 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">ВКонтакте</h1>
            <nav className="flex gap-4">
              <button className="hover:bg-white/10 px-3 py-1 rounded">Моя страница</button>
              <button className="hover:bg-white/10 px-3 py-1 rounded">Новости</button>
              <button className="hover:bg-white/10 px-3 py-1 rounded">Друзья</button>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Search" size={20} />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-4">
            {/* Profile Card */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-[#4A76A8] to-[#5B88BD] h-32"></div>
              <CardContent className="pt-0 pb-4 px-4 -mt-16 relative">
                <Avatar className="w-32 h-32 border-4 border-white mx-auto mb-3">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha" />
                  <AvatarFallback>СИ</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold text-center mb-1">Саша Иванов</h2>
                <p className="text-sm text-gray-600 text-center mb-3">онлайн</p>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-lg mb-3">Информация</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="MapPin" size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600">Город:</p>
                      <p>Москва</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Icon name="GraduationCap" size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600">Школа:</p>
                      <p>СОШ № 15, Москва</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Icon name="Calendar" size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600">Дата рождения:</p>
                      <p className="text-[#4A76A8] font-medium">15 марта 2008 (16 лет)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Icon name="Phone" size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600">Телефон:</p>
                      <p className="text-[#4A76A8] font-medium">+7 (916) 555-1234</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Icon name="Heart" size={16} className="text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600">Интересы:</p>
                      <p>Обожаю свою собаку, её зовут Барсик (12.01 — день её рождения)!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Friends Preview */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">Друзья</h3>
                  <span className="text-sm text-gray-600">450</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {friends.slice(0, 6).map(friend => (
                    <div key={friend.id} className="text-center">
                      <Avatar className="w-16 h-16 mx-auto mb-1 relative">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.name}`} />
                        <AvatarFallback className={friend.fake ? "bg-gray-300" : ""}>{friend.avatar}</AvatarFallback>
                        {friend.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </Avatar>
                      <p className="text-xs truncate">{friend.name.split(' ')[0]}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-4">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="w-full grid grid-cols-4 bg-white">
                <TabsTrigger value="posts">Записи</TabsTrigger>
                <TabsTrigger value="photos">Фотографии</TabsTrigger>
                <TabsTrigger value="friends">Друзья</TabsTrigger>
                <TabsTrigger value="info">Информация</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4">
                {/* Post */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha" />
                        <AvatarFallback>СИ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#4A76A8]">Саша Иванов</h4>
                        <p className="text-xs text-gray-500">вчера в 18:24</p>
                      </div>
                    </div>
                    
                    <p className="mb-3">Купил новый велик! 🚴‍♂️🔥</p>
                    
                    <div className="bg-gray-100 rounded-lg aspect-[4/3] max-w-md mb-2 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=400&fit=crop" 
                        alt="Велосипед" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">возле дома</p>

                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                      <Icon name="MapPin" size={14} />
                      <span>ул. Ленина 42</span>
                    </div>

                    <div className="flex items-center gap-4 pt-3 border-t">
                      <button className="flex items-center gap-1 text-gray-600 hover:text-[#4A76A8]">
                        <Icon name="Heart" size={18} />
                        <span className="text-sm">Нравится</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-[#4A76A8]">
                        <Icon name="MessageCircle" size={18} />
                        <span className="text-sm">Комментировать</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-[#4A76A8]">
                        <Icon name="Share2" size={18} />
                        <span className="text-sm">Поделиться</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacy Warning */}
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="AlertTriangle" size={24} className="text-amber-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-1">Открытые настройки приватности</h4>
                        <p className="text-sm text-amber-800">Все посты видны всем пользователям ВКонтакте</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="photos" className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">Фотографии <span className="text-gray-500 font-normal">12</span></h3>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=300&h=300&fit=crop" 
                          alt="Велосипед" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-200 rounded"></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="friends" className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Все друзья</h3>
                      <span className="text-gray-600">450</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {friends.map(friend => (
                        <div key={friend.id} className="flex items-center gap-2">
                          <Avatar className="w-12 h-12 relative">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${friend.name}`} />
                            <AvatarFallback className={friend.fake ? "bg-gray-300" : ""}>{friend.avatar}</AvatarFallback>
                            {friend.online && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{friend.name}</p>
                            {friend.fake && <Badge variant="secondary" className="text-xs">Подозрительный</Badge>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-4">И ещё 438 друзей</p>
                  </CardContent>
                </Card>

                {/* Privacy Warning */}
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Icon name="ShieldAlert" size={24} className="text-red-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-900 mb-1">Список друзей открыт</h4>
                        <p className="text-sm text-red-800">Среди друзей обнаружены подозрительные и фейковые страницы</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="info" className="space-y-4">
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Основная информация</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">День рождения:</span>
                          <span className="font-medium">15 марта 2008</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Город:</span>
                          <span className="font-medium">Москва</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Телефон:</span>
                          <span className="font-medium">+7 (916) 555-1234</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Образование</h3>
                      <div className="space-y-2 text-sm">
                        <div className="py-2 border-b">
                          <p className="font-medium">СОШ № 15</p>
                          <p className="text-gray-600">Москва</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Интересы</h3>
                      <p className="text-sm">Обожаю свою собаку, её зовут Барсик (12.01 — день её рождения)!</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacy Warnings */}
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" size={24} className="text-orange-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-orange-900 mb-2">Открытые данные</h4>
                        <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
                          <li>Полная дата рождения доступна всем</li>
                          <li>Номер телефона виден в профиле</li>
                          <li>Информация о собаке содержит дату (может использоваться в паролях)</li>
                          <li>Геолокация "Двор у моего дома" раскрывает место жительства</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}