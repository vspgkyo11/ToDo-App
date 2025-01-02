<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    use HasFactory;

    public function toDoDetails()
    {
        return $this->hasMany(ToDoDetail::class);
    }

    public function delete()
    {
        // 関連するToDoDetailレコードを削除する
        $this ->toDoDetails()->delete();

        // ToDoレコードを削除する
        return parent::delete();
    }
}
