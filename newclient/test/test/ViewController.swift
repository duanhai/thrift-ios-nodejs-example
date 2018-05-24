//
//  ViewController.swift
//  test
//
//  Created by duanhai on 2018/5/24.
//  Copyright © 2018年 duanhai. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let userCredential = UserCredentials.init(token: "tonyduan")
        let transPort = TSocketClient.init(hostname: "localhost", port: 9090)
        let protocl = TBinaryProtocol(transport: transPort)
        
        let client = MessagingClient(with: protocl)
        client?.ping(userCredential)
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

