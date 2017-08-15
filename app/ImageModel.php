<?php
namespace App;

class ImageModel
{
    /**
     * Upload user profile avatar
     */
    public function uploadUserProfileAvatar($request)
    {
        $imageName = time() . '.' . $request->image->getClientOriginalExtension();
        if ((strpos($imageName, '.') !== false)) {$imageName = $imageName . 'jpg';}
        $request->image->move(public_path('user_avatars'), $imageName);
        $pathToImg = '/user_avatars/' . $imageName;
        $user = \App\User::find(\Auth::user()->id);
        if ($user->fullInfoAboutUser->avatar_path != null) {
            $current_user_avatar = $user->fullInfoAboutUser->avatar_path;
            $current_user_avatar_path = base_path('/public/' . $current_user_avatar);
            if (\File::isFile($current_user_avatar_path)) {
                if (strpos($current_user_avatar_path, 'user_avatars') !== false) {
                    \File::delete($current_user_avatar_path);
                }
            }
        }
        $user->fullInfoAboutUser()->update(['avatar_path' => $pathToImg]);
        $user->save();
        return $pathToImg;
    }

    /**
     * delete user profile avatar
     */
    public function deleteUserAvatar()
    {
        $user = \App\User::find(\Auth::user()->id);
        $placeholderAvatar = '/image/avatar-placeholder.png';
        if (isset($user->fullInfoAboutUser->avatar_path)) {
            $current_user_avatar = $user->fullInfoAboutUser->avatar_path;
            $current_user_avatar_path = base_path('/public/' . $current_user_avatar);
            if (\File::isFile($current_user_avatar_path)) {
                if (strpos($current_user_avatar_path, 'user_avatars') !== false) {
                    \File::delete($current_user_avatar_path);
                }
            }
            $user->fullInfoAboutUser()->update(['avatar_path' => $placeholderAvatar]);
        }
    }
}