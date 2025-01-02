<?php

namespace App\Http\Controllers;

use App\Http\Requests\ToDo\UpdateRequest;
use App\Http\Requests\ToDoDetail\StoreRequest;
use App\Models\ToDoDetail;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;

class ToDoDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        // 新規のToDoDetailモデルを作成する
        $toDoDetail = new ToDoDetail();
       
        // ToDoDetailモデルに値を設定する
        $toDoDetail->to_do_id = $request->get('to_do_id');
        $toDoDetail->name = $request->get('name');
        $toDoDetail->completed_flag = false;       

        // DBにデータを登録する
        $toDoDetail->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        // IDに紐づくToDoDetailモデルを取得する
        $toDoDetail = ToDoDetail::find($id);

        // nameをToDoDetailモデルに設定する
        $toDoDetail ->name = $request->get('name');
        
        // ToDoDetailテーブルを更新する
        $toDoDetail->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // IDに紐づくToDoモデルを取得する
        $toDoDetail = ToDoDetail::find($id);

        // ToDoデータベースから対象のレコードを削除する
        $toDoDetail->delete();

    }
}
