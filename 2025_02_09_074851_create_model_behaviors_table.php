<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('model_behaviors', function (Blueprint $table) {
            $table->id();
            $table->string('model', 300);
            $table->unsignedBigInteger('model_id');
            $table->foreignId('behavior_id')->constrained('behaviors')->onDelete('cascade');
            $table->timestamps();

            // $table->unique(['model', 'model_id', 'behavior_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('model_behaviors');
    }
};
