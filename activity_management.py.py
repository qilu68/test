
# 活动管理模块
# 用于存储活动信息的字典
activities = {}
def create_activity(name, location, time):
    activity_id = len(activities) + 1  # 给活动分配唯一ID
    activities[activity_id] = {
        'name': name,
        'location': location,
        'time': time,
        'participants': 0  # 初始化参与人数为0
    }
    print(f"活动 '{name}' 在 {location} 于 {time} 创建成功，活动ID为 {activity_id}")
    return activity_id

def join_activity(user_id, activity_id):
    if activity_id not in activities:
        print(f"活动 {activity_id} 不存在！")
        return
    
    activities[activity_id]['participants'] += 1  # 参与人数加1
    print(f"用户 {user_id} 已成功加入活动 {activity_id}，当前参与人数: {activities[activity_id]['participants']}！")

def view_activity(activity_id):
    if activity_id not in activities:
        print(f"活动 {activity_id} 不存在！")
        return
    
    activity = activities[activity_id]
    print(f"活动ID: {activity_id}, 名称: {activity['name']}, 地点: {activity['location']}, 时间: {activity['time']}, 参与人数: {activity['participants']}") 


