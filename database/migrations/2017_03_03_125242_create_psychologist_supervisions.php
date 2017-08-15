<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePsychologistSupervisions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('psychologist_supervision', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->string('surname');
            $table->string('email');
            $table->string('address');
            $table->string('post');
            $table->string('city')->nullable();
            $table->string('phone')->nullable();
            $table->string('special_preparation')->nullable();
            $table->string('special_evidence')->nullable();
            $table->boolean('special_trained');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('psychologist_supervision');
    }
}
