<?php

namespace App\Console\Commands;

use App\Permission;
use App\Role;
use Illuminate\Console\Command;

class CreateRolesAndPermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:roles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Roles and Permissions';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //Create admin user role
        $admin = new Role();
        $admin->name = 'admin';
        $admin->display_name = 'Administrator';
        $admin->description  = 'Web master role';
        $admin->save();
        //Create psychologist user role
        $psychologist = new Role();
        $psychologist->name = 'psychologist';
        $psychologist->display_name = 'The Psychologist';
        $psychologist->description  = 'Psychologist role';
        $psychologist->save();
        //Create Supervisor user role
        $supervisor = new Role();
        $supervisor->name = 'supervisor';
        $supervisor->display_name = 'The Supervisor';
        $supervisor->description  = 'Supervisor role';
        $supervisor->save();
        //Create Course Organizer user role
        $courseOrganizer = new Role();
        $courseOrganizer->name = 'courseOrganizer';
        $courseOrganizer->display_name = 'The Course Organizer';
        $courseOrganizer->description  = 'Course Organizer role';
        $courseOrganizer->save();
        //Create Supervisor Free Version Permission
        $supervisorFreeVersion = new Permission();
        $supervisorFreeVersion->name = "supervisorFreeVersion";
        $supervisorFreeVersion->display_name = "Free Version";
        $supervisorFreeVersion->description  = 'User has Free Version profile';
        $supervisorFreeVersion->save();
        //Create Supervisor Pro Version Permission
        $supervisorProVersion = new Permission();
        $supervisorProVersion->name = "supervisorProVersion";
        $supervisorProVersion->display_name = "Pro Version";
        $supervisorProVersion->description  = 'User has Pro Version profile';
        $supervisorProVersion->save();
        //Create Course Organize Free Version Permission
        $courseOrganizerFreeVersion = new Permission();
        $courseOrganizerFreeVersion->name = "courseOrganizerFreeVersion";
        $courseOrganizerFreeVersion->display_name = "Free Version";
        $courseOrganizerFreeVersion->description  = 'User has Free Version profile';
        $courseOrganizerFreeVersion->save();
        //Create Course Organize Free Version Permission
        $courseOrganizerProVersion = new Permission();
        $courseOrganizerProVersion->name = "courseOrganizerProVersion";
        $courseOrganizerProVersion->display_name = "Pro Version";
        $courseOrganizerProVersion->description  = 'User has Pro Version profile';
        $courseOrganizerProVersion->save();
        //Attach Permissions to roles
        $supervisor->perms()->sync([$supervisorFreeVersion->id,$supervisorProVersion->id]);
        $courseOrganizer->perms()->sync([$courseOrganizerFreeVersion->id,$courseOrganizerProVersion->id]);
    }
}
