from .serializers import CustomUserSerializer #you have already created UserSerializer

def jwt_response_payload_handler(token, user=None, request=None):
    user = CustomUserSerializer(user, context={'request': request}).data
    return {
        'token': token,
        'userid': user['id'],
        'user_name':user['user_name'],
        'is_staff':user['is_staff'],
    }
